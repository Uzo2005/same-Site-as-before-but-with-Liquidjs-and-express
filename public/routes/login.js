const express       = require('express');
const app           = express();
const path          = require('path');
const router        = express.Router();







const login = 
    router.get('/login', (req, res) => {
        res.render('login')
    });
    

    
    
module.exports = login;