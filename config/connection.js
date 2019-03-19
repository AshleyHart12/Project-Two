
require('dotenv').config()
let Sequelize = require('sequelize')

console.log(process.env.DB_DATABASE)


let sequelize = new Sequelize("coffee_quiz_db", "root", "Noles08!!", {

    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize