const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(router);
app.use(express.static(path.join(__dirname,'../public')));

router.get('/', (req, res) => {
    // if(sessionIsSet) {
    //     res.render(path.join(__dirname, '/public', 'login.html'))
    // }
    res.sendFile(path.join(__dirname, '../public', 'register.html'))
});
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login', 'login.html'))
});
router.get('/instructions/general', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/instruction pages/when you start', 'starting_instructions.html'))
});
router.get('/instructions/writing', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/instruction pages/after reading', 'writing_instructions.html'))
});
router.get('/instructions/noCalc', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/instruction pages/after writing', 'mathsNoCalc_instructions.html'))
});
router.get('/instructions/break', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/instruction pages/after writing', 'break.html'))
});
router.get('/instructions/Calc', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/instruction pages/after MathsNoCalc', 'mathsCalc_instructions.html'))
});
router.get('/reading', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/English/English Reading page', 'index.html'))
});
router.get('/writing', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/English/English Writing page', 'index.html'))
});
router.get('/noCalc', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Maths/maths(no calc)', 'index.html'))
});
router.get('/calcAllowed', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Maths/maths(calc allowed)', 'index.html'))
});
router.get('/end', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/instruction pages/The End', 'index.html'))
});
 
module.exports = router;

//Create new routes for each  new user