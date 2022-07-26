const express   = require('express');
const path      = require('path');
const router    = express.Router();

const leisureBreak = router.get('/leisureBreak', (req, res) => {
    res.render('instructions/leisureBreak')
});

module.exports = leisureBreak;