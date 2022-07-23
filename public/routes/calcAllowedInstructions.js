const express   = require('express');
const path      = require('path');
const router    = express.Router();

const calcAllowedInstructions = router.get('/calcAllowedInstructions', (req, res) => {
    res.sendFile(path.join(__dirname, '../instruction pages', 'calcAllowedInstructions.html'))
});

module.exports = calcAllowedInstructions;