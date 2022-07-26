const express   = require('express');
const path      = require('path');
const router    = express.Router();

const calcAllowedInstructions = router.get('/calcAllowedInstructions', (req, res) => {
    res.render('instructions/calcAllowedInstructions')
});

module.exports = calcAllowedInstructions;