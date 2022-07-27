//Calling everything express needs
require('dotenv').config();
const express   = require('express');
const app       = express();
const path      = require('path');
const router    = express.Router();
const passport = require('passport')
const session   = require('express-session')
const flash     = require('express-flash')


const { Liquid } = require('liquidjs');
const engine = new Liquid();


//Calling all my routes
const register                  = require('./register')
const login                     = require('./login');
const dashboard                 = require('./userDashboard')
const generalInstructions       = require('./generalInstructions');
const reading                   = require('./reading');
const writingInstructions       = require('./writingInstructions');
const writing                   = require('./writing');
const leisureBreak              = require('./leisureBreak');
const noCalcInstructions        = require('./noCalcInstructions');
const noCalc                    = require('./noCalc');
const calcAllowedInstructions   = require('./calcAllowedInstructions');
const calcAllowed               = require('./calcAllowed');
const end                       = require('./end');

 //static contents
 app.use(express.static(path.join(__dirname,'../styles')));
 app.use(express.static(path.join(__dirname,'../images')));


 //Middlewares
 
 app.use(express.urlencoded( {extended: true }))
 app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
 
 app.use(passport.initialize())
 app.use(passport.session())

 app.use(flash())

 




// register liquid engine
app.set('view engine', 'liquid');       // set liquid to default
app.engine('liquid', engine.express()); 
app.set('views', path.join(__dirname,'../views'));            // specify the views directory

const checkNotAunthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/login')
    }
    next()
}

    const routes = 

    //Initialising my routes
    app.use(router);
    app.use(register);
    app.use(login);
    app.use(dashboard);
    app.use(generalInstructions);
    app.use(reading);
    app.use(writingInstructions);
    app.use(writing);
    app.use(leisureBreak);
    app.use(noCalcInstructions);
    app.use(noCalc);
    app.use(calcAllowedInstructions);
    app.use(calcAllowed);
    app.use(end);
    
      
    
    


    router.get('/',checkNotAunthenticated, (req, res) => {
        
        res.render('register')
    });
    
    
    
    

        module.exports = routes;

//Create new routes for each  new user
/**
 * TODO: I have to make the css files in to one giant bundle and use them from there 
 * I have to make sure all the routes each have a different file to serve it
 * Then I can handle authentication properly
 */