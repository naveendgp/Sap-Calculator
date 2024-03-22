const express = require('express');
const router = express.Router();
const Student = require('../Model/Student');

router.get('/getStudent', async (req, res) => {
    try {
        const deleteStudent = await Student.find({});
        res.json(deleteStudent);
        console.log(allFaculty);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'No Student to delete' });
    }
});

module.exports = router;
