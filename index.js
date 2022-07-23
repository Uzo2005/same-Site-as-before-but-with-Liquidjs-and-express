require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./router/routes')


app.use(routes)





const PORT  = process.env.PORT || 2022;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
