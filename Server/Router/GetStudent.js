const express = require('express');
const router = express.Router();
const Student = require('../Model/Student');

router.get('/getStudent', async (req, res) => {
    try {
        const getStudent = await Student.find({});
        res.json(getStudent);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'No student to retrieve' });
    }
});

module.exports = router;
