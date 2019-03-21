var CoffeeQuiz = require("../models/example.js");
//var db = require("../public/js/app");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    CoffeeQuiz.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  app.get("/", function(req, res) {
    res.render("login");
  });
  app.get("/survey", function(req, res) {
    res.render("survey");
  });
  app.get("/profile", function(req, res) {
    res.render("profile");
  });
  app.get("/results", function(req, res) {
    res.render("results");
  });

  // POST route for new user
  app.post("/api/add", function(req, res) {
    // console.log("I'm looking for this " + JSON.stringify(req.body));
    console.log(req.body);
  
    res.json(req.body);

    CoffeeQuiz.create({
      userName: req.body.username,
      email: req.body.email,
      coffeeType: req.body.coffeeType,
      location: req.body.location
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/all/:id", function(req, res) {
    CoffeeQuiz.findOne({
      where: {
        id: req.params.id
      }.then(function(CoffeeQuiz) {
        res.join(CoffeeQuiz);
      })
    });
  });
};
// };
