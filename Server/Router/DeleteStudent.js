const express = require('express');
const router = express.Router();
const Student = require('../Model/Student');
const mongoose = require('mongoose');

router.get('/deleteStudent', async (req, res) => {
    const { name } = req.query; // Extract student ID from query parameters
    console.log(name)
    try {
        const response = await Student.deleteOne({ name: name });
        console.log(response);
        res.json(response); // Send the response back to the client
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error deleting student' });
    }
});



module.exports = router;
