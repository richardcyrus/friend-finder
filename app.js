/**
 * friend-finder
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2018 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const path = require('path')

const htmlRouter = require('./routes/static')
const apiRouter = require('./routes/api')

const app = express()

app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
  express.static(path.join(__dirname, 'public'), {
    extensions: ['html'],
    index: false,
  })
)

app.use('/api', apiRouter)
app.use('/', htmlRouter)

module.exports = app
