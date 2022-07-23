const express   = require('express');
const path      = require('path');
const router    = express.Router();

const writingInstructions = router.get('/writingInstructions', (req, res) => {
    res.sendFile(path.join(__dirname, '../instruction pages', 'writingInstructions.html'))
});

module.exports = writingInstructions;