const express = require('express')
const router = require('express').Router
const app = express()
const port = 3000

app.get('/get', (req, res) => {
    console.log('is here')
    res.json({code:0,result:'brizer'})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))