const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', function (req, res){
    res.send('Welcome to the app ')
})

app.listen(PORT, function (){
    console.log('App listening on PORT' + PORT)
})