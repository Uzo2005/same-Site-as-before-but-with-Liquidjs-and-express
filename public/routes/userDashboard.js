const express       = require('express');
const app           = express();
const path          = require('path');
const router        = express.Router();
const methodOverride = require('method-override');
const allTestInfo     = require('../../api/getAllTests')







// const users = require('../mockStudents')


// const members       = require('../mockStudents')

router.use(express.json());
router.use(express.urlencoded( {extended: true }));
router.use(methodOverride('_method'))


const checkAunthenticated = (req, res, next) => {
   if (req.isAuthenticated()) {
       return next()
   }
   res.redirect('/')
}


const dashboard = 
    
         router.get('/dashboard',checkAunthenticated, (req,res) => {
            /**
             * client.fetch(all available tests).
             * foreach(test){
             * display them in those links}
             * where each was a button which when clicked makes the query to become the test identifier for that test
             * The function the button will carry out will render the genral instructions page and pass down the queries object
             * A query object constains queries for each test and then every route would have to handle its pagination
             */
            
            res.render('dashboard', {name: req.user.name,testInfo: allTestInfo })
        
            
         })
         router.delete('/logout',checkAunthenticated, (req, res) => {
            req.logout({keepSessionInfo: true}, (err) => {if(err){console.error(err)}} )
            res.redirect('/login')
        })
    

module.exports = dashboard;






        
        // router.post('/dashboard', (req, res) => {
        

        // const newMember = 
        // {
        //     id: members.length + 1, // I was suprisingly smart enough to try this and it worked fine, I hope it does not have hidden  errors
        //     name: req.body.studentName,
        //     email:req.body.studentEmail,
        //     password: req.body.studentPassword1

        // }
        
        // if(!newMember.name) {
        //     return res.status(400).json({msg: 'Please Include a name'});
        // }
        // if(!newMember.email) {
        //     return res.status(400).json({msg: 'Please Include an email'});
        // } 
        // if(!newMember.password) {
        //         return res.status(400).json({msg: 'Please Include a password'});
        // }

        // const foundEmail = members.some(member => member.email === newMember.email)
        // const foundName = members.some(member => member.name === newMember.name)
        
        // if(foundEmail && foundName){
        //     return res.render('dashboard')
        // }
        
        // res.send(`<p>Sorry You Are Not An EdUSA Member, If You Think This Is A Mistake Let Us Know!</p>`);
        
        
        // });
        //  router.post('/dashboard/', (req,res) => {

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
        //       return res.render('dashboard', {name: student.name})
        //     }

        //     res.status(400).json({msg: `Wrong Login Details because Name:${foundName} and Password:${matchedPassword}`})
          
        //  })