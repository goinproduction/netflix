const Film = require('../models/Film');

class FilmController {
    // @route POST api/series
    // @desc Get series
    // @access public
    async getSeries(req, res) {
        try {
            const series = await Film.find({ type: 'series' });
            res.json({ success: true, series });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 'false',
                message: 'Internal server error',
            });
        }
    }

    // @route GET api/films
    // @desc Get films
    // @access public
    async getFilms(req, res) {
        try {
            const films = await Film.find({ type: 'films' });
            res.json({ success: true, films });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 'false',
                message: 'Internal server error',
            });
        }
    }

    // @route GET api/all
    // @desc Get all
    // @access public
    async getAll(req, res) {
        try {
            const films = await Film.find({});
            res.json({ success: true, films });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 'false',
                message: 'Internal server error',
            });
        }
    }

    // @route POST api/posts
    // @desc Add film
    // @access Private
    async addFilm(req, res) {
        const { title, description, genre, maturity, slug, type } = req.body;

        // Simple validation
        if (!title)
            res.status(400).json({
                success: false,
                message: 'Title is required',
            });
        else if (!description)
            res.status(400).json({
                success: false,
                message: 'description is required',
            });
        else if (!genre)
            res.status(400).json({
                success: false,
                message: 'genre is required',
            });
        else if (!maturity)
            res.status(400).json({
                success: false,
                message: 'maturity is required',
            });
        else if (!slug)
            res.status(400).json({
                success: false,
                message: 'slug is required',
            });
        else if (!type)
            res.status(400).json({
                success: false,
                message: 'type is required',
            });
        try {
            const newFilm = new Film({
                title,
                description,
                genre,
                maturity,
                slug,
                type,
            });
            await newFilm.save();

            res.json({
                success: true,
                message: 'Film created successfully',
                film: newFilm,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 'false',
                message: 'Internal server error',
            });
        }
    }

    // @route DELETE api/posts
    // @desc Delete film
    // @access Private
    async updateFilm(req, res) {
        const { title, description, genre, maturity, slug, type } = req.body;
        try {
            let filmUpdate = {
                title,
                description,
                genre,
                maturity,
                slug,
                type,
            };
            const condition = {
                _id: req.params.id,
            };
            filmUpdate = await Film.findOneAndUpdate(condition, filmUpdate, {new: true});
            if (!filmUpdate) {
                return res.status(401).json({
                    success: false,
                    message: 'Film not found',
                });
            }
            res.json({
                success: true,
                message: 'Film updated successfully',
                film: filmUpdate,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Internal server error',
                success: 'false',
            });
        }
    }
    // @route DELETE api/posts
    // @desc Delete film
    // @access Private
    async deleteFilm(req, res) {
        try {
            const condition = {
                _id: req.params.id,
            };
            const deleteFilm = await Film.findOneAndDelete(condition);

            if (!deleteFilm)
                return res.status(401).json({
                    success: false,
                    message: 'Film not found',
                });
            res.json({
                success: true,
                message: 'Film deleted successfully',
                film: deleteFilm,
            });
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
