const express   = require('express');
const router    = express.Router();
const bcrypt = require('bcrypt')


const users = require('../mockStudents')//This will contain the array of students name and email from sanity







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
        if(!newStudent.name || !newStudent.email || !newStudent.password) {
            
            res.redirect('/')
        }
            
        users.push(newStudent)
            
        res.redirect('/login')
    }catch{
        res.redirect('/')
    }
    // console.log(users)
       
});
module.exports = register