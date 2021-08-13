const express = require('express');
const router = express.Router();

const FilmController = require('../controllers/FilmController');

router.get('/series', FilmController.getSeries);
router.get('/films', FilmController.getFilms);
router.post('/create', FilmController.addFilm);
router.delete('/:id', FilmController.deleteFilm);

module.exports = router;
