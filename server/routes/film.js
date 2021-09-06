const express = require('express');
const router = express.Router();

const FilmController = require('../controllers/FilmController');

router.get('/series', FilmController.getSeries);
router.get('/films', FilmController.getFilms);
router.get('/all', FilmController.getAll);
router.post('/create', FilmController.addFilm);
router.put('/:id', FilmController.updateFilm);
router.delete('/:id', FilmController.deleteFilm);

module.exports = router;
