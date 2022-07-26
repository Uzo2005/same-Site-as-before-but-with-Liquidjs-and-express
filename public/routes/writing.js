const express   = require('express');
const path      = require('path');
const router    = express.Router();

const writing = router.get('/writing', (req, res) => {
    res.render('writing')
});

module.exports = writing;