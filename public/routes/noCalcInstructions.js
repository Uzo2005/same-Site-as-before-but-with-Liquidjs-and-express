const express   = require('express');
const path      = require('path');
const router    = express.Router();

const checkAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

const noCalcInstructions = router.get('/noCalcInstructions',checkAunthenticated, (req, res) => {
    res.render('instructions/noCalcInstructions')
});

module.exports = noCalcInstructions;