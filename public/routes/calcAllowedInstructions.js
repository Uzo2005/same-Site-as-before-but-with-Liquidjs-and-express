const express   = require('express');
const path      = require('path');
const router    = express.Router();

const checkAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

const calcAllowedInstructions = router.get('/calcAllowedInstructions',checkAunthenticated, (req, res) => {
    res.render('instructions/calcAllowedInstructions')
});

module.exports = calcAllowedInstructions;