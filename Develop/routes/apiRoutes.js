
var notesData = require("../db/db.json")

module.exports = function (app) {

app.post('/api/addNote', function (req, res){
    const body = req.body;
    
    notesData.push(body)
    
    res.json(body)
})

}