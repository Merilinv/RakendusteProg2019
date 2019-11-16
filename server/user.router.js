const express = require('express');
const router = express.Router();
const User = require("./user.model.js");


//get all users
router.get("/api/users", (req, res) => {
    User.find({}, (err, docs) => {
        if (err) return handleError(err, res);
        res.status(200).json(docs);
    });
});

//login
router.post("/api/users/login", (req, res) => {
    console.log("body", req.body);
    User.login(req.body)
        .then( user => {
            res.json(user);
        })
        .catch ( err => {
            handleError(err, res);
        });
 
});

//create new user (signup)
router.post("/api/users/signup", (req, res) => {
    
    User.signup(req.body)
        .then( user => {
            res.status(200).json(user); 
        })
        .catch( err => {
            return handleError(err, res);
        });
});

//delete all users
router.delete("/api/users", (req, res) => {
    User.deleteMany({}, (err, docs) => {
        if (err) return handleError(err, res);
        console.log(docs);
        console.log("All users deleted");
        res.send(204);
    });
});

const handleError = (err, res) => {
    console.log(err);
    res.send(500);
};

module.exports = router;
