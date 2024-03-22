const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Admin = require('../Model/admin');
const { hashPassword, comparePassword } = require("../helpers/auth")

router.post('/login', async (req, res) => {
    const JWT_SECRET = "secret";

    try {
        const { username, password } = req.body;

        const user = await Admin.findOne({ username });
        if (!user) {
            return res.status(404).json({
                error: "No user exists with that username."
            });
        }

        const match = await comparePassword(password, user.password);
        if (match) {
            // Generating a JWT token with user information
            const token = jwt.sign({ username: user.username, id: user._id, role: user.role }, JWT_SECRET);

            // Setting the token in a cookie
            res.cookie('token', token, { httpOnly: true }).json({
                message: "Login successful.",
                user: user
            });
        } else {
            res.status(401).json({
                error: "Password doesn't match."
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Internal server error."
        });
    }
});

module.exports = router