/* eslint-disable */
/* eslint operator-linebreak: ["error", "after", { "overrides": { "?": "before", ":": "before"} }] */
/* eslint-enable */

/**
 * friend-finder
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2018 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

/**
 * Module dependencies.
 */
const app = require('./app/app')
const debug = require('debug')('friend-finder:server')
const http = require('http')

/**
 * Get the port from the environment and store it in Express.
 *
 * @type {*|*|boolean}
 */
const port = normalisePort(process.env.PORT || '3000')
app.set('port', port)

/**
 * Create a HTTP server.
 *
 * @type {Server}
 */
const server = http.createServer(app)

/**
 * Configure the listening port, on all network interfaces.
 */
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalise a port into a number, string, or false.
 *
 * @param value
 * @returns {*}
 */
function normalisePort(value) {
  const port = parseInt(value, 10)

  // Named Pipe.
  if (isNaN(port)) {
    return value
  }

  // Port Number.
  if (port >= 0) {
    return port
  }

  return false
}

/**
 * Event listener for HTTP server `error` event.
 *
 * @param error
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  // Handle specific listen errors with friendly messages.
  switch (error.code) {
    case 'EACCESS':
      console.error(`${bind} requires elevated privileges.`)
      throw new Error(`${bind} requires elevated privileges.`)
    case 'EADDRINUSE':
      console.error(`${bind} is already in use.`)
      throw new Error(`${bind} is already in use.`)
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server `listening` event.
 */
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`

  debug(`Listening on ${bind}`)
}
