
var path = require("path")

module.exports = function(app){
    app.get('/', function (req, res){
        res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
    })
    
    app.get('/notes', function (req, res){
        res.sendFile(path.join(__dirname, 'Develop/public/notes.html')) 
    })

    app.get("*", function(req, res) {
        res.status(404).sendFile(path.join(__dirname, "../public/404.html"));
      });
}

