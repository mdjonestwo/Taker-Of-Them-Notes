var notesData = require("../db/db.json");
const fs = require("fs");
const dbFile = __dirname + "/../db/db.json";

module.exports = function (app) {
  app.post("/api/notes", function (req, res) {
    // Take the request body
    const body = req.body;
    // Take the current data within the JSON fiLE.
    fs.readFile(dbFile, "utf-8", (err, data) => {
      if (err) throw err;
      const oldData = JSON.parse(data);
      oldData.push(body);
      console.log(oldData);
      fs.writeFile(dbFile, JSON.stringify(oldData), () => {
        fs.readFile(dbFile, "utf-8", (err, data) => {
          res.json(data);
        });
      });
    });
  });

  app.get("/api/notes", function (req, res) {
    /// Take the contnents of DB.json
    fs.readFile("../justin", "utf-8", (error, data) => {
      if (error) {
        res.json({ error: JSON.stringify(error) });
      }
      console.log(data);
      res.json(JSON.parse(data));
    });
    // Save them to a variable
    // Res.json with that variable
  });
};
