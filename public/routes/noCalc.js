const express   = require('express');
const path      = require('path');
const router    = express.Router();

const checkAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

const noCalc = router.get('/noCalc',checkAunthenticated, (req, res) => {
    res.render('noCalc')
});

module.exports = noCalc;