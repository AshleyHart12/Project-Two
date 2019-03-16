var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var CoffeeQuiz = sequelize.define("CoffeeQuizes", {
  userName: Sequelize.STRING,
  email: Sequelize.STRING,
  coffeeType: Sequelize.STRING
});

CoffeeQuiz.sync();

module.exports = CoffeeQuiz;
