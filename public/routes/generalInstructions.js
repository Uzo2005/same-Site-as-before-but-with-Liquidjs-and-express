const express   = require('express');
const path      = require('path');
const router    = express.Router();

const generalInstructions = router.get('/generalInstructions', (req, res) => {
    res.sendFile(path.join(__dirname, '../instruction pages', 'generalInstructions.html'))
});
module.exports = generalInstructions;