//Calling everything Express needs
require('dotenv').config();
const path      = require('path');
const express   = require('express');
const app       = express();
const routes    = require('./public/routes/routes')

//serving the static files
app.use(express.static(path.join(__dirname,'./public')));

//routes
app.use(routes);

//bodyParser
app.use(express.urlencoded( {extended: true }));



//setting the ports
const PORT  = process.env.PORT || 2022;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
