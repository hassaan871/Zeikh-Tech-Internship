const db = require('../db/db');

const addUser = (req, res) => {
    const newUser = {
        id: db.length+1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    db.push(newUser);
    return res.status(200).send(newUser);
}

module.exports = addUser;