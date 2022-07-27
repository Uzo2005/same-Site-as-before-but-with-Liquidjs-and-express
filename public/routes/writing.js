const express   = require('express');
const path      = require('path');
const router    = express.Router();


const checkAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

const writing = router.get('/writing',checkAunthenticated, (req, res) => {
    res.render('writing')
});

module.exports = writing;