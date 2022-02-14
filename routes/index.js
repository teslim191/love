const express = require('express');

const router = express.Router();

const message = require('../api/message')

router.get('/', (req, res)=>{
    res.send('hello man')
})


module.exports = router