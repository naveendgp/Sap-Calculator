const express = require('express')
const router = express.Router()
const Faculty = require('../Model/Faculty');
const { hashPassword, comparePassword } = require("../helpers/auth")


router.post('/register', async (req, res) => {

    try {
        const { name, email, password, role, phoneNumber, allocatedDep } = req.body;
        const hashedPassword = await hashPassword(password)
        const newFaculty = await Faculty.create({
            name,
            email,
            phoneNumber,
            allocatedDep,
            password: hashedPassword,
            role
        });
        console.log(req.body)
        console.log("password:", hashedPassword)
        res.json(newFaculty)
    } catch (err) {
        console.log("error", err);
        return res.status(500).json({ error: err });
    }
})

module.exports = router