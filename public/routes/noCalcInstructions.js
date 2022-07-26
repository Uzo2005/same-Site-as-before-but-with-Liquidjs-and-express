const express   = require('express');
const path      = require('path');
const router    = express.Router();

const noCalcInstructions = router.get('/noCalcInstructions', (req, res) => {
    res.render('instructions/noCalcInstructions')
});

module.exports = noCalcInstructions;