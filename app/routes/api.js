/**
 * friend-finder
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2018 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data/friends.json');

/**
 * In app.js the `/api` route is defined as the routing base that points to the
 * router export from this module. In this module, to process routes,
 * we do not include the `/api` base in the route matching functions.
 * If we do, then the endpoint would become `/api/api/friends`.
 */

router.get('/friends', function(req, res) {
    fs.readFile(dataPath, 'utf8', (error, data) => {
        if (error) res.end(`Error: ${error}`);

        const friendData = JSON.parse(data);
        res.json(friendData);
    });
});

router.post('/friends', function(req, res) {
    let totalDifference;
    let friendDifference = 100;
    let bestFriend;

    const userData = req.body;

    // Convert the numbers from the Scores into integers.
    userData.scores = userData.scores.map((item) => {
        return parseInt(item);
    });

    // Determine the best match for the current information.
    fs.readFile(dataPath, 'utf8', (error, data) => {
        if (error) res.end(`Error: ${error}`);

        const friends = JSON.parse(data);

        for (let f = 0; f < friends.length; f++) {
            totalDifference = 0;

            // Calculate the scores.
            for (let s = 0; s < userData.scores.length; s++) {
                const friendScore = friends[f].scores[s];
                const candidateScore = userData.scores[s];
                const difference = Math.abs(friendScore - candidateScore);
                totalDifference += difference;
            }

            // Determine the match. If the totalDifference is less than
            // the starting friendDifference then we have a match. The
            // last lowest score should be the final match.
            if (totalDifference < friendDifference) {
                friendDifference = totalDifference;
                bestFriend = friends[f];
            }
        }

        // Add the information for the new inputs to the friends data.
        friends.push(userData);

        // Save the information for the new inputs back to the data file.
        fs.writeFile(dataPath, JSON.stringify(friends), (error) => {
            if (error) throw error;
        });

        // Send the match back to the frontend.
        res.send(bestFriend);
    });
});

module.exports = router;
