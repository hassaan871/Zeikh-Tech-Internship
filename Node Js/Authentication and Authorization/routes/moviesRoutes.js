const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/authMiddlewares');
const moviesController = require('../controllers/moviesController');

router.get('/movies', auth, moviesController);

module.exports = router;