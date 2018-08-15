const express = require('express')
const next = require('next')
const Router = require('./routes')
const uuid = require('uuid/v4')
const session = require('express-session')
const pg = require('pg')
const pgSession = require('connect-pg-simple')(session)
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const fetch = require('node-fetch')
const constants = require("./constants")
const FormData = require('form-data')
const bcrypt = require('bcrypt')

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

// configure passport.js to use the local strategy
passport.use(new LocalStrategy((username, password, done) => {
    db.query("SELECT id, username, password, email FROM users WHERE username = $1", [username.toLocaleLowerCase()])
      .then(res => {
        user = res.rows[0]

        if (!user) return done(null, false, info="Invalid credentials");

        bcrypt.compare(password, user.password)
          .then(res => { 
            if (!res) return done(null, false, info="Invalid credentials")

            // Remove password from user info
            delete user.password;
            
            return done(null, user);
          })
          .catch((ex) => { return done(ex) })
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
  db.query("SELECT id, username, email FROM users WHERE id = $1", [id])
    .then(res => {
      user = res.rows[0]

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

    server.post("/login", (req, res, next) => {
      // If the user is already signed up, return him to home
      if (req.isAuthenticated())
      {
        return res.redirect("/refresh-auth")
      }
      
      passport.authenticate('local', (err, user, info) => {
        if (info) return res.redirect(`/login?username=${req.body.username}&message=${info}`)
        if (err) return res.redirect(`/login?username=${req.body.username}&message=An internal error occurred, please try again later!`);

        req.login(user, (err) => {
          if (err) return res.redirect(`/login?username=${req.body.username}&message=An internal error occurred, please try again later!`);

          return res.redirect('/refresh-auth');
        })
      })(req, res, next)
    });

    server.get("/refresh-auth", (req, res) => {
      return res.redirect('/');
    })

    server.post("/register", (req, res, next) => {
      // If the user is already signed up, return him to home
      if (req.isAuthenticated())
      {
        return res.redirect("/refresh-auth")
      }

      function validateUsername(username) {
        var re = /^[a-z0-9_-]{3,15}$/
        return re.test(username)
      }

      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      function validatePassword(password) {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        return strongRegex.test(password) || mediumRegex.test(password);
      }

      // If no captcha entered, send error
      if (!req.body['g-recaptcha-response'] || req.body['g-recaptcha-response'] == "")
      {
        // Redirect back with error
        return res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=Recaptcha wasn't entered!`);
      } else if (!req.body.username || !validateUsername(req.body.username)) {
        // Redirect back with error
        return res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=Invalid username entered!`);
      } else if (!req.body.email || !validateEmail(req.body.email)) {
        // Redirect back with error
        return res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=Invalid e-mail entered!`);
      } else if (!req.body.password || !validatePassword(req.body.password)) {
        // Redirect back with error
        return res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=Week password was entered!`);
      } else if (!req.body.passwordConfirm || req.body.password != req.body.passwordConfirm) {
        // Redirect back with error
        return res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=Password doesn't match the password confirm!`);
      }

      db.query("SELECT EXISTS(SELECT FROM users WHERE username = $1)", [req.body.username.toLocaleLowerCase()])
        .then(res1 => {
          if (res1.rows[0].exists == true) { // If a user with this username exists
            res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=Username is already in use!`);
          } else {
            db.query("SELECT EXISTS(SELECT FROM users WHERE email = $1)", [req.body.email.toLocaleLowerCase()])
              .then(res2 => {
                if (res2.rows[0].exists == true) // If a user with this email exists 
                {
                  res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=The email you provided is already associated with another account!`);
                } else {
                  const recaptchaVerifyPayload = new FormData()
                  recaptchaVerifyPayload.append("secret", constants.GOOGLE_RECAPTCHA_SITE_SECRET)
                  recaptchaVerifyPayload.append("response", req.body['g-recaptcha-response'])

                  // Verify recpatcha
                  fetch(constants.GOOGLE_RECAPTCHA_VERIFY, {
                    method: "POST",
                    body: recaptchaVerifyPayload
                  })
                    .then(resp => resp.json())
                    .then(resp => {
                      if (resp.success == true) // If recaptcha verification succeed
                      {
                        bcrypt.hash(req.body.password, 10)
                          .then(hash => {
                            db.query("INSERT INTO users(id, username, email, password) VALUES($1, $2, $3, $4)", [
                              uuid(), 
                              req.body.username.toLocaleLowerCase(),
                              req.body.email.toLocaleLowerCase(),
                              hash
                            ])
                              .then(() => {
                                passport.authenticate('local', (err, user, info) => {
                                  if (info || err) return res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=An internal error occurred, please try again later!`)
                          
                                  req.login(user, (err) => {
                                    if (err) return res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=An internal error occurred, please try again later!`)
                                    
                                    return res.redirect('/refresh-auth');
                                  })
                                })(req, res, next)
                            })
                              .catch(() => res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=An internal error occurred, please try again later!`))
                          })
                          .catch(() => res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=An internal error occurred, please try again later!`))
                      } else {
                        // Redirect back with error
                        res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=Recaptcha verification failed!`);
                      }
                    })
                    .catch(() => res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=An internal error occurred, please try again later!`))
                }
              })
              .catch(() => res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=An internal error occurred, please try again later!`))
          }
        })
        .catch(() => res.redirect(`/register?username=${req.body.username}&email=${req.body.email}&message=An internal error occurred, please try again later!`))
    });

    server.post('/logout', function(req, res){
      req.logout();
      res.redirect('/refresh-auth');
    });

    server.get('*', (req, res) => {
      handle(req, res)
    });

    server.listen(server.get('port'))
  })