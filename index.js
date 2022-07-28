//Calling everything Express needs
require('dotenv').config();
const path      = require('path');
const express   = require('express');
const app       = express();
const routes    = require('./public/routes/routes')







//serving the static files
app.use(express.static(path.join(__dirname,'./public')));

//routes
app.use(routes);






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
 * On the dashboard each link would invoke a different query
 * every query specifies a test to be taken
 * when the test is being taken, every completed test is marked and result stored in the user's sanity document
 * when all tests are completed, then the users scores are downloaded back
 * and the appropriate  calculations would be made to show the sat score
 * the user can then go back to dashboard
 */