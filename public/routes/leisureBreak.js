const express   = require('express');
const path      = require('path');
const router    = express.Router();

const checkAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

const leisureBreak = router.get('/leisureBreak',checkAunthenticated, (req, res) => {
    res.render('instructions/leisureBreak')
});

module.exports = leisureBreak;