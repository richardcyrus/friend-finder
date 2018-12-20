/**
 * friend-finder
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2018 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const path = require('path');
const express = require('express');
const router = express.Router();

const sendFileOptions = { root: path.join(__dirname, '../public') };

router.get('/survey', function(req, res) {
    res.render('survey');
});

router.get('*', function(req, res) {
    res.sendFile('index.html', sendFileOptions);
});

module.exports = router;
