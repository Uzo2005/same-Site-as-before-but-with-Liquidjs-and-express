const express   = require('express');
const router    = express.Router();
const bcrypt = require('bcrypt')
const users = []
 
const register =
router.post('/register/auth', async (req, res) => {
    try{
        const hashedPassword = bcrypt.hash(req.body.studentPassword1, 10)
        users.push({
            name: req.body.studentName,
            email: req.body.studentEmail,
            password: hashedPassword
        })
        res.redirect('/dashboard')
    }catch{
        res.redirect('/')
    }
    console.log(users)
       
});
module.exports = register