const express   = require('express');
const path      = require('path');
const router    = express.Router();

const noCalc = router.get('/noCalc', (req, res) => {
    res.sendFile(path.join(__dirname, '../Maths', 'noCalc.html'))
});

module.exports = noCalc;