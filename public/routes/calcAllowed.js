const express   = require('express');
const path      = require('path');
const app       = express();
const router    = express.Router();


const checkAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

const calcAllowed = router.get('/calcAllowed', checkAunthenticated, (req, res) => {
    res.render('calcAllowed.liquid')
});

module.exports = calcAllowed;