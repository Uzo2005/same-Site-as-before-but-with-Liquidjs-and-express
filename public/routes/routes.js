//Calling everything express needs
const express   = require('express');
const app       = express();
const path      = require('path');
const router    = express.Router();


//Calling all my routes
const login                     = require('./login');
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

 
    const routes = 

    //Initialising my routes
    app.use(router);
    app.use(login);
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
    
    
    
   
    
    
    router.get('/', (req, res) => {
        // if(sessionIsSet) {
            //     res.render(path.join(__dirname, '/public', 'login.html'))
            // }
            res.sendFile(path.join(__dirname, '../login', 'register.html'))
        });
        

        module.exports = routes;

//Create new routes for each  new user
/**
 * TODO: I have to make the css files in to one giant bundle and use them from there
 * I have to make sure all the routes each have a different file to serve it
 * Then I can handle authentication properly
 */