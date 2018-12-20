/**
 * friend-finder
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2018 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/survey', function(req, res) {
    res.render('survey');
});

module.exports = router;
