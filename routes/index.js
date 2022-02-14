const express = require('express');

const router = express.Router();

const message = require('../api/message')

router.get('/', (req, res)=>{
    res.status(200).json(message)
})


module.exports = router