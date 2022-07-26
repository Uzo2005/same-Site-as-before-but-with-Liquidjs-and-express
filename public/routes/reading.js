const express   = require('express');
const path      = require('path');
const router    = express.Router();

const reading = router.get('/reading', (req, res) => {
    res.render('reading', )
});

module.exports = reading;