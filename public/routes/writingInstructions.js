const express   = require('express');
const path      = require('path');
const router    = express.Router();

const writingInstructions = router.get('/writingInstructions', (req, res) => {
    res.render('instructions/writingInstructions')
});

module.exports = writingInstructions;