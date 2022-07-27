const express   = require('express');
const path      = require('path');
const router    = express.Router();

const checkAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

const end = router.get('/end', checkAunthenticated, (req, res) => {
    res.render('instructions/end')
});

module.exports = end;