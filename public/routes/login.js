require('dotenv').config();
const express       = require('express');
const router        = express.Router();
// const app           = express()
const initializePassport = require('./passportConfig')
const passport = require('passport')
// const session   = require('express-session')
// const flash     = require('express-flash')
const users = require('../mockStudents')

// router.use(express.json());
// router.use(express.urlencoded( {extended: true }));
// router.use(passport.initialize())
// router.use(passport.session())
// router.use(flash())


// router.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))







const login = 

    router.get('/login', (req, res) => {
        res.render('login')
    });
    initializePassport(
        passport, 
        name =>  users.find(user => user.name == name),
        
    )
    router.post('/login', passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    }))
    
    
module.exports = login;