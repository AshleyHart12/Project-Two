module.exports = function(sequelize, DataTypes) {

  var CoffeeQuiz = sequelize.define("CoffeeQuiz", {
    user_name: DataTypes.STRING,
    email: DataTypes.TEXT,
    Coffee_Type: DataTypes.STRING
  });
  return CoffeeQuiz;
};


