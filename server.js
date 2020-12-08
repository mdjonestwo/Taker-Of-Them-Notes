const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

const notes = require('./db.json');

require("./routes/apiRoutes.js")(app)
require("./routes/htmlRoutes.js")(app)


app.listen(PORT, function (){
    console.log('App listening on PORT' + PORT)
})

