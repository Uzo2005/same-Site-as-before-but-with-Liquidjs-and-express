const express   = require('express');
const path      = require('path');
const router    = express.Router();

const generalInstructions = router.get('/generalInstructions', (req, res) => {
    res.render('instructions/generalInstructions')
});
module.exports = generalInstructions;