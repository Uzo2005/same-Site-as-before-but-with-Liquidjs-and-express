const express   = require('express');
const path      = require('path');
const router    = express.Router();

const noCalc = router.get('/noCalc', (req, res) => {
    res.render('noCalc')
});

module.exports = noCalc;