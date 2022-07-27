//Calling everything Express needs
require('dotenv').config();
const path      = require('path');
const express   = require('express');
const app       = express();
const routes    = require('./public/routes/routes')
const methodOverride = require('./method-override')




//serving the static files
app.use(express.static(path.join(__dirname,'./public')));

//routes
app.use(routes);

//bodyParser
app.use(express.urlencoded( {extended: true }));
app.use(methodOverride('_method'))


const checkAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}
const checkNotAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/dashboard')
    }
    next()
}
app.delete('/logout', (req, res) => {
    req.logout()
    res.redirect('/login')
})

//setting the ports
const PORT  = process.env.PORT || 2022;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



// router.route('/users/:user_id')
//   .all(function (req, res, next) {
//     // runs for all HTTP verbs first
//     // think of it as route specific middleware!
//     next()
//   })
//   .get(function (req, res, next) {
//     res.json(req.user)
//   })
//   .put(function (req, res, next) {
//     // just an example of maybe updating the user
//     req.user.name = req.params.name
//     // save user ... etc
//     res.json(req.user)
//   })
//   .post(function (req, res, next) {
//     next(new Error('not implemented'))
//   })
//   .delete(function (req, res, next) {
//     next(new Error('not implemented'))
//   })

/**
 * I am server side rendering in liqiud this night and moving to the sanity api calls tomorrow
 */