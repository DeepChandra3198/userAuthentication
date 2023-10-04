require('dotenv').config()
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username:'root',
    password:process.env.password,
    database:'userAuthentication'
});

module.exports = sequelize;

sequelize.authenticate()
.then(()=>{
    console.log("connected succsessfully")
}).catch(()=>{
    console.log("connection failed")
})