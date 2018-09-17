// GIVEN STARTER CODE

var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  
  // DatumBox API NODE.JS CODE

  // api-key: 917ef13adf4f58b8421cc6a161f94f5a
  var datum = require("datumbox").factory("917ef13adf4f58b8421cc6a161f94f5a");


  // asynchronous parallel service request from DatumBox on text.
  //
  // textToCheck = string of user input in textarea
  app.post("/api/results", function(err, res) {

    var serviceValues = ['SubjectivityAnalysis', 'SentimentAnalysis', 'TopicClassification', 'AdultContentDetection', 'CommercialDetection'];
    datum.parallel(textToCheck, serviceValues,
      function(err, results) {
        if (err) return console.error(err);
        // return results array matching serviceValues array
        return(results);
      }
    );
  })
  
};