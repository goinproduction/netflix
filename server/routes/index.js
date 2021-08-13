const authRouter = require('./auth');
const filmRouter = require('/film');
const route = (app) => {
    app.use('/api/auth', authRouter);
    app.use('/api/film', filmRouter);
};

module.exports = route;
