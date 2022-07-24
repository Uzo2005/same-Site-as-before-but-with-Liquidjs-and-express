const express       = require('express');
const app           = express();
const path          = require('path');
const router        = express.Router();


router.use(express.json());
router.use(express.urlencoded( {extended: true }));


const dashboard = 

    router.post('/dashboard', (req, res) => {
        console.log(req.body)
        res.send(`Hi, ${req.body.studentName}`)
        
      

    })
    

module.exports = dashboard;