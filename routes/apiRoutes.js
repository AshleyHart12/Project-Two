// var db = require("../models");
// //var moment = require("moment");
// var request = require("request");
// var nodemailer = require("nodemailer");
var CoffeeQuiz = require("../models/example.js");

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

  // POST route for new user
  app.post("/api/add", function(req, res) {
    console.log(req.body);
    // res.json(req.body);

    CoffeeQuiz.create({
      email: req.body.email,
      userName: req.body.userName
    }).then(function (results) {
      res.json(results);
    });
  });
};
