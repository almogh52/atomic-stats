const express = require('express')
const next = require('next')
const Router = require('./routes')
const uuid = require('uuid/v4')
const session = require('express-session')
const pg = require('pg')
const pgSession = require('connect-pg-simple')(session)
const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const fetch = require('node-fetch')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const server = express()
const handle = Router.getRequestHandler(app)

const db = new pg.Pool({
  user: "Administrator",
  host: "atomicdbinstance.cj5dzkuafsum.eu-west-2.rds.amazonaws.com",
  database: "atomicdb",
  password: "AlmogH212940191!",
  port: 5432
});

passport.use(new GoogleStrategy({
    clientID:     "819763797090-0cbbbdp8qj8c3uh8i0jnfih90pkvqa8r.apps.googleusercontent.com",
    clientSecret: "9fdqH4z0Qaw4BLR_SWV4_GWa",
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    db.query("SELECT * FROM users WHERE user_profile_id = $1", [profile.id])
      .then(res => {
        user = res.rows[0]

        if (user)
        {
          delete user.user_profile_id

          return done(null, user);
        }

        var user_id = uuid()

        db.query("INSERT INTO users VALUES($1, $2, $3, $4)", [user_id, profile.id, null, []])
          .then(res => {
            user = {
              id: user_id,
              player_id: undefined,
              shortcuts: []
            }

            return done(null, user);
          })
          .catch((ex) => {
            return done(ex)
          })
      })
      .catch((ex) => {
        return done(ex)
      })
  }
));

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// tell passport how to deserialize the user from it's id
passport.deserializeUser((id, done) => {
  db.query("SELECT * FROM users WHERE id = $1", [id])
    .then(res => {
      user = res.rows[0]

      // Remove profile id from user info
      delete user.user_profile_id

      return done(null, user);
    })
    .catch((ex) => {
      return done(ex)
    })
});

server.set('port', process.env.PORT || 3000);

app.prepare()
  .then(() => {
    server.use(express.json());       // to support JSON-encoded bodies
    server.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

    // add & configure middleware
    server.use(session({
      genid: (req) => {
        return uuid() // use UUIDs for session IDs
      },
      store: new pgSession({
        pool : db,                // Connection pool
        tableName : 'user_sessions'   // Use another table-name than the default "session" one
      }),
      secret: 'a9bff8bf475a76938ffe9eb4ba417ec168161825',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 Days
    }))

    server.use(passport.initialize());
    server.use(passport.session());

    server.get('/auth/google',
      passport.authenticate('google', { scope:
        [ 'https://www.googleapis.com/auth/plus.login',
          'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
    ));

    server.get( '/auth/google/callback',
      passport.authenticate( 'google', {
        successRedirect: '/auth/refresh/?snackbar=Login successful!',
        failureRedirect: '/?snackbar=Login failed! Please try again later!'
    }));

    server.get("/auth/refresh", (req, res) => {
      if (req.query.snackbar)
        return res.redirect('/?snackbar=' + req.query.snackbar);
      else
        return res.redirect('/');
    })

    server.post("/post-register", (req, res) => {
      if (!req.isAuthenticated || !req.user || req.body.ign == "")
        return res.redirect(`/post-register?ign=${req.body.ign}&message=Invalid parameters sent!`)

      // Try get the stats of the player to check if it exists
      fetch(`http://localhost:5000/player/${req.body.ign}`)
        .then(response => response.json())
        .then(json => {
          if ('error' in json)
            return res.redirect(`/post-register?ign=${req.body.ign}&message=Player not found!`)

          db.query("UPDATE users SET player_id = $1 WHERE id = $2", [json.id, req.user.id])
            .then(() => res.redirect("/?snackbar=Registration completed, Welcome to Atomic Stats!"))
            .catch(() => res.redirect(`/post-register?ign=${req.body.ign}&message=An internal error occurred, please try again later!`))
        })
        .catch(ex => {
          return res.redirect(`/post-register?ign=${req.body.ign}&message=Player not found!`)
        })
    })

    server.post("/add-shortcut", (req, res) => {
      // If invalid parameters sent, return to page
      if (!req.isAuthenticated || !req.user || req.body.id == "" || req.body.displayName == "")
        return res.redirect(req.body.redirect == undefined ? "/" : req.body.redirect)
        
      // Check if already exists
      shortcuts_ids = req.user.shortcuts.map(({id}) => id)
      if (shortcuts_ids.includes(req.body.id) || req.user.player_id == req.body.id)
        return res.redirect(req.body.redirect == undefined ? "/" : req.body.redirect)

      req.user.shortcuts.push({
        displayName: req.body.displayName,
        id: req.body.id
      })

      db.query("UPDATE users SET shortcuts = $1 WHERE id = $2", [req.user.shortcuts, req.user.id])
        .then(() => res.redirect(req.body.redirect == undefined ? "/" : req.body.redirect))
        .catch(() => res.redirect(req.body.redirect == undefined ? "/" : req.body.redirect))
    })

    server.post('/auth/logout', function(req, res){
      req.logout();
      res.redirect('/auth/refresh');
    });

    server.use(function(req, res, next) {
      // If the user is logged in but is missing ign it means he need to finish registeration
      if (req.isAuthenticated && req.user && !req.user['player_id'] && !req.url.includes("/post-register") && !req.url.includes("_next") && !req.url.includes("static"))
      {
        return res.redirect("/post-register")
      } else {
        next();
      }
    })

    server.get('*', (req, res) => {
      handle(req, res)
    });

    server.listen(server.get('port'))
  })