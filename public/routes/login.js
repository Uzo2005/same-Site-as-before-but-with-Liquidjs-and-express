const express       = require('express');
const app           = express();
const path          = require('path');
const router        = express.Router();







const login = 
    router.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname, '../login', 'login.html'))
    });
    

    
    
module.exports = login;