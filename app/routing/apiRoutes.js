let friends = require("../data/friends.js");

module.exports = app => {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let totalDiff = 0;
        let bestMatch = {
            name: "",
            photo: "",
            friendDiff = 1000
        };
        let userData = req.body;
        let userName = userData.name;
        let userScores = userData.scores;

        let b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };
        console.log(`Name:${username}`);
        console.log(`User Score:${userScores}`);

        let sum = b.reduce((a, b) => a + b, 0);
        console.log(`Sum of users score${sum}`);
        console.log(`Best match ${bestMatch.friendDiff}`);
        console.log(`-----------------------------------`);

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDiff = 0;
            console.log(`Total Diff ${totalDiff}`);
            console.log(`Best Match ${bestMatch.friendDiff}`);

            let bestFriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log(`Total Score: ${bestFriendScore}`);
            totalDiff += Math.abs(sum - bestFriendScore);
            console.log(`------------------------- ${totalDiff}`);

            if (totalDiff <= bestMatch.friendDiff) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDiff = totalDiff;
            }
            console.log(`${totalDiff} Total Difference`);
        }
        console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added");
        console.log(userData);
        res.join(bestMatch);
    });
};