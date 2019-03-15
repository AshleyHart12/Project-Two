var db = require("../models");
//var moment = require("moment");
var request = require("request");
var nodemailer = require("nodemailer");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
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

    db.Users.create({
      email: req.body.email,
      topGenre: req.body.topGenre,
      secondGenre: req.body.secondGenre,
      uid: req.body.uid
    }).then(function(results) {
      res.json(results);
    });
  });

  //GET route for MYQL id (when new user is created)
  app.get("/new/:id", function(req, res) {
    db.Users.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
        request(queryURL, function(error, response, body) {
          console.log("error:", error); // Print the error if one occurred
          console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
          res.render("profile", JSON.parse(body));
        });
      });
  });

  //GET route for FB id (when existing user logs in)
  app.get("/current/:uid", function(req, res) {
    db.Users.findOne({}).then(function(result) {
      request(queryURL, function(error, response, body) {
        console.log("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        res.render("profile", JSON.parse(body));
      });
    });
  });

  //POST route for nodemailer
  app.post("/email", function(req, res) {
    var recipient = req.body.email;

    db.Users.findOne({
      where: {
        email: recipient
      }
    }).then(function(result) {
        request(queryURL, function(error, response, body) {
          console.log("error:", error); // Print the error if one occurred
          console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
          var moviesBody = JSON.parse(body);
          //var imgToEmail = " <img src='coffee type"' />";

          console.log("Nodemailer sending to: " + recipient);

          var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "coffeequiz303@gmail.com",
              pass: "Root123!@#"
            }
          });

          var mailOptions = {
            from: "coffeequiz303@gmail.com",
            replyTo: "coffeequiz303@gmail.com",
            to: recipient,
            subject: "Here are your results from the Coffee Quiz!",
            text: "Need to list the results here"
          };

          transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent");
            }
          });

          //console.log("COFFEE TYPE EMAILED: " + "need to send that type");

          res.send(true);
        });
      });
  });
};
