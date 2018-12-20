/**
 * friend-finder
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2018 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const express = require('express');

const htmlRouter = require('./routes/static');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(
    path.join(__dirname, 'public'),
    {
        extensions: ['html'],
        index: false
    },
));

app.use('/', htmlRouter);

module.exports = app;
