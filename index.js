require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname,'/public')));

app.get('/', (req, res) => {
    // if(sessionIsSet) {
    //     res.render(path.join(__dirname, '/public', 'login.html'))
    // }
    res.render(path.join(__dirname, '/public', 'index.html'))
});



const PORT  = process.env.PORT || 2022;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
