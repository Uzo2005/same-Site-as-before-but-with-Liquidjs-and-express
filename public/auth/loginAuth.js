const express   = require('express');
const router    = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport')
const flash     = require('express-flash')
const session   = require('express-session')


const initializePassport = require('./passportConfig')
initializePassport(
    passport, 
    name =>  users.find(user => user.name == name),
    email => users.find(user => user.email == email)
)

router.use(flash())
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())



const loginAuth =
router.post('login/auth', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))




module.exports = loginAuth