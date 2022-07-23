const express   = require('express');
const path      = require('path');
const router    = express.Router();

const reading = router.get('/reading', (req, res) => {
    res.sendFile(path.join(__dirname, '../English', 'reading.html'))
});

module.exports = reading;