const express       = require('express');
const app           = express();
const path          = require('path');
const router        = express.Router();
const bodyParser    = require('body-parser');  



// app.use(express.json());
// app.use(express.urlencoded( {extended: false}));


const login = 
    router.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname, '../login', 'login.html'))
    });
    
    // router.post('/login', (req,res) => {

    // })

module.exports = login;