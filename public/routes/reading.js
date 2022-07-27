const express   = require('express');
const path      = require('path');
const router    = express.Router();


const checkAunthenticated = (req, res, next) => {
    
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

const reading = router.get('/reading',checkAunthenticated, (req, res) => {
    console.log(req.session)
    res.render('reading')
});


module.exports = reading;