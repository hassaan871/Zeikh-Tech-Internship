const user = require("../db/db");

const getAllUsers = (req, res) => {
    return res.send(user);
}

module.exports = getAllUsers;