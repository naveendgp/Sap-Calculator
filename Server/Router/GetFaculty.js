const express = require('express');
const router = express.Router();
const Faculty = require('../Model/Faculty');

router.get('/getFaculty', async (req, res) => {
    try {
        const allFaculty = await Faculty.find({}); 
        res.json(allFaculty);
        console.log(allFaculty);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error retrieving faculty' });
    }
});

module.exports = router;
