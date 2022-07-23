const express   = require('express');
const path      = require('path');
const router    = express.Router();

const calcAllowed = router.get('/calcAllowed', (req, res) => {
    res.sendFile(path.join(__dirname, '../Maths', 'calcAllowed.html'))
});

module.exports = calcAllowed;