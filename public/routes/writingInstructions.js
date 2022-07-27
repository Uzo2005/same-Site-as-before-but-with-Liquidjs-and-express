const express   = require('express');
const path      = require('path');
const router    = express.Router();

const checkAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

const writingInstructions = router.get('/writingInstructions',checkAunthenticated, (req, res) => {
    res.render('instructions/writingInstructions')
});

module.exports = writingInstructions;