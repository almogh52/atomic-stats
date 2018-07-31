const express = require('express')
const next = require('next')
const Router = require('./routes')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const server = express()
const handle = Router.getRequestHandler(app)

server.set('port', process.env.PORT || 3000);

app.prepare()
  .then(() => {
    server.get('*', (req, res) => handle(req, res))
    server.listen(server.get('port'))
  })