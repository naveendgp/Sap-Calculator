const express = require('express');
const router = express.Router();
const Student = require('../Model/Student');

router.get('/faculty/students', async (req, res) => {
    const { allocatedDep } = req.query; // Access parameters from query string
    console.log(allocatedDep)

    try {
        const response = await Student.find({ allocatedDep: { $in: allocatedDep } });
        if (response.length > 0) { // Check if response array is not empty
            res.json(response);
            console.log(response);
        } else {
            res.json("No data to display"); // Corrected message
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error retrieving faculty' });
    }
});

module.exports = router;
