const express   = require('express');
const path      = require('path');
const router    = express.Router();

const end = router.get('/end', (req, res) => {
    res.sendFile(path.join(__dirname, '../instruction pages', 'end.html'))
});

module.exports = end;