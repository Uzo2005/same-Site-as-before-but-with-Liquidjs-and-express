const express   = require('express');
const path      = require('path');
const router    = express.Router();

const leisureBreak = router.get('/leisureBreak', (req, res) => {
    res.sendFile(path.join(__dirname, '../instruction pages', 'leisureBreak.html'))
});

module.exports = leisureBreak;