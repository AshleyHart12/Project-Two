// var db = require("../models");
var CoffeeQuiz = require("../models/example.js");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    CoffeeQuiz.findAll({}).then(function(dbExamples) {
      res.render("login", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/survey", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/views/survey.handlebars"))
    res.render("/survey");
});


  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    CoffeeQuiz.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
