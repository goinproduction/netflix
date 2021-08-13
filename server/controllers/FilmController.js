const Film = require('../models/Film');

class FilmController {
    // @route POST api/series
    // @desc Get series
    // @access public
    async getSeries(req, res) {
        try {
            const series = await Film.find({ genre: 'series' });
            res.json({ success: true, series });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 'false',
                message: 'Internal server error',
            });
        }
    }

    // @route POST api/films
    // @desc Get films
    // @access public
    async getFilms(req, res) {
        try {
            const films = await Film.find({ genre: 'films' });
            res.json({ success: true, films });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 'false',
                message: 'Internal server error',
            });
        }
    }
}

module.exports = new FilmController();
