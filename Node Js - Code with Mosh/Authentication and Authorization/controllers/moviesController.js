function moviesController(_, res) {
    return res.status(200).send({"movie":"Star Wars"});
}

module.exports = moviesController;