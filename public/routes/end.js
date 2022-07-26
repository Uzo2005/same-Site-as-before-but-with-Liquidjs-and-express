const express   = require('express');
const path      = require('path');
const router    = express.Router();

const end = router.get('/end', (req, res) => {
    res.render('instructions/end')
});

module.exports = end;