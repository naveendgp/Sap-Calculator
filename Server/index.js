const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Admin = require('./Model/admin');
const { hashPassword, comparePassword } = require("./helpers/auth")
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser")
const PORT = 8000

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

mongoose.connect('mongodb://0.0.0.0:27017/sap')
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Error Occured: ", err))


app.post('/register', async (req, res) => {

    try {
        const { username, password, role } = req.body;
        const hashedPassword = await hashPassword(password)
        const newAdmin = await Admin.create({
            username,
            password: hashedPassword,
            role
        });
        console.log(req.body)
        console.log("password:", hashedPassword)
        res.json(newAdmin)
    } catch (err) {
        console.log("error", err);
        return res.status(500).json({ error: err });
    }
})

app.post('/login', async (req, res) => {
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
app.listen(PORT, () => {
    console.log("Listening...")
})