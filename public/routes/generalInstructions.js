const express   = require('express');
const path      = require('path');
const router    = express.Router();
const store     = require('store2')

const checkAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

const generalInstructions = 
    router.get('/generalInstructions',checkAunthenticated, (req, res) => {

        res.render('instructions/generalInstructions')
    });

    router.post('/generalInstructions', checkAunthenticated, (req, res) => {
        store('examInfo', req.body)
        res.render('instructions/generalInstructions')
    })



module.exports = generalInstructions;