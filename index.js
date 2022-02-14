const express = require('express');

const app = express();

app.use('/', require('./routes/index'));


const PORT = 4000


app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));