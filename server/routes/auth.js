const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth');
const authController = require('../controllers/AuthController');

router.get('/', verifyToken, authController.isUserLogged);
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
