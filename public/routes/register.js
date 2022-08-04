const express   = require('express');
const router    = express.Router();
const bcrypt = require('bcrypt')
const flash   = require('express-flash');
// const sanityClient = require('../../api/sanityClient')


const users = require('../mockStudents')//This will contain the array of students name and email from sanity



router.use(flash())


const register =


router.post('/register', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.studentPassword1, 10)
        const newStudent = {
            id: users.length + 1,
            name: req.body.studentName,
            email: req.body.studentEmail,
            password: hashedPassword
        }
        
        if(!newStudent.name || !newStudent.email || !newStudent.password || req.body.studentPassword1 != req.body.studentPassword2) {
            
            throw new Error();
        }

        /**
         * await sanityClient.create({
         * type: 'students',
         * fields:[
         * {nameOfStudent: `${newStudent.name}`},
         * {emailOfStudent: `${newStudent.email}`},
         * {hashedPassword: `${newStudent.password}`}
         * 
         * ]
         * })
         */
            
        users.push(newStudent)
            
        res.redirect('/login')
    }catch(e){
        req.flash('error', 'Confirm Your Password, and Make Sure You Inputed A Name and An Email! ');
        
        res.redirect('/')
    }
    // console.log(users)
       
});
module.exports = register


/**
 * To prevent users from going back, I will make sure that the referrrer for each route is the previous one
 */