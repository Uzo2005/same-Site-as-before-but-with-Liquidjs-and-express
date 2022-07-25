const express       = require('express');
const app           = express();
const path          = require('path');
const router        = express.Router();
const members       = require('../mockStudents')

router.use(express.json());
router.use(express.urlencoded( {extended: true }));



const dashboard = 
            
        router.post('/dashboard', (req, res) => {
        

        const newMember = 
        {
            id: members.length + 1, // I was suprisingly smart enough to try this and it worked fine, I hope it does not have hidden  errors
            name: req.body.studentName,
            email:req.body.studentEmail,
            password: req.body.studentPassword1

        }
        
        if(!newMember.name) {
            return res.status(400).json({msg: 'Please Include a name'});
        }
        if(!newMember.email) {
            return res.status(400).json({msg: 'Please Include an email'});
        } 
        if(!newMember.password) {
                return res.status(400).json({msg: 'Please Include a password'});
        }

        const foundEmail = members.some(member => member.email === newMember.email)
        const foundName = members.some(member => member.name === newMember.name)
        
        if(foundEmail && foundName){
            return res.sendFile(path.join(__dirname, '../dashboard', 'dashboard.html'))
        }
        
        res.send(`<p>Sorry You Are Not An EdUSA Member, If You Think This Is A Mistake Let Us Know!</p>`);
        
        
        });
        //  router.post('/dashboard', (req,res) => {

        //     const student = {
        //         name: req.body.studentName,
        //         password: req.body.studentPassword,
        //         }

            
            

        //     if(!student.password) {
        //             return res.status(400).json({msg: 'Please Include a password'});
        //     }
        //     if(!student.name) {
        //         return res.status(400).json({msg: 'Please Include a Name'});
        //     }

            

        //     const foundName = members.some(member => member.name === student.name)
        //     const matchedPassword = members.some(member => member.password === student.password)
        //     if(foundName && matchedPassword) {
        //       return res.sendFile(path.join(__dirname, '../dashboard', 'dashboard.html'))
        //     }

        //     res.status(400).json({msg: `Wrong Login Details because Name:${foundName} and Password:${matchedPassword}`})
          
        //  })
    
         router.get('/dashboard', (req,res) => {
            res.sendFile(path.join(__dirname, '../dashboard', 'dashboard.html'))
            
         })
    

module.exports = dashboard;