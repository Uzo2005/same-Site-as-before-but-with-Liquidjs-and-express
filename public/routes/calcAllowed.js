const express   = require('express');
const path      = require('path');
const app       = express();
const router    = express.Router();


const calcAllowed = router.get('/calcAllowed', (req, res) => {
    res.render('calcAllowed.liquid')
});

module.exports = calcAllowed;