const express = require('express');
const dotenv = require('dotenv');


dotenv.config({path: './config/config.env'});
const app = express();

app.use('/', require('./routes/index'));


const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));