const express = require('express');
const router = express.Router();

const FilmController = require('../controllers/FilmController');

router.get('/series', FilmController.getSeries);
router.get('/films', FilmController.getFilms);

module.exports = router;