const express   = require('express');
const path      = require('path');
const router    = express.Router();

const noCalcInstructions = router.get('/noCalcInstructions', (req, res) => {
    res.sendFile(path.join(__dirname, '../instruction pages', 'noCalcInstructions.html'))
});

module.exports = noCalcInstructions;