const router = require('express').Router();
const User = require('../models/user.model');

router.route('/addUser').post(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({username,password});

    await newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getUser').get((req, res) => {
    User.find({username: req.body.username, password: req.body.password})
        .then(user => res.json({user: user[0].username}))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;