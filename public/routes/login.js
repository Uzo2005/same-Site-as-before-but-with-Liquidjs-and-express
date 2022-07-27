const express       = require('express');
const app           = express();
const path          = require('path');
const router        = express.Router();


router.use(express.json());
router.use(express.urlencoded( {extended: true }));




const login = 
    router.get('/login', (req, res) => {
        res.render('login')
    });
    
    
    
    
module.exports = login;