const User = require('../models/User');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

class AuthController {
    // @route POST /api/auth/register
    // @desc Register user
    // @access public
    async register(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password)
                return res.status(400).json({
                    success: false,
                    message: 'Missing username or password',
                });

            const user = await User.findOne({ username });

            if (user)
                return res
                    .status(400)
                    .json({ success: false, message: 'User already exists' });

            const hashedPassword = await argon2.hash(password);
            const newUser = new User({ username, password: hashedPassword });
            await newUser.save();

            const accessToken = jwt.sign(
                { userId: newUser._id },
                process.env.ACCESS_TOKEN
            );
            res.json({
                success: true,
                message: 'User created successfully',
                accessToken,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
            });
        }
    }

    // @route POST /api/auth/login
    // @desc Login user
    // @access public
    async login(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password)
                return res.status(400).json({
                    success: false,
                    message: 'Missing username or password',
                });
            const user = await User.findOne({ username });
            if (!user)
                return res.status(400).json({
                    success: false,
                    message: 'Incorrect username or password',
                });
            const validPassword = argon2.verify(user.password, password);
            if (!validPassword)
                return res.status(400).json({
                    success: false,
                    message: 'Incorrect username or password',
                });

            const accessToken = jwt.sign(
                { userId: user._id },
                process.env.ACCESS_TOKEN
            );

            res.json({
                success: true,
                message: 'User logged in successfully',
                accessToken,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
            });
        }
    }
}

module.exports = new AuthController();
