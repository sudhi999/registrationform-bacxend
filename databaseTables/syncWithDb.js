const sequelize = require('../connection.js')
const User = require('./registerform.js')

sequelize.sync({ alter: true }).then(result => {
    console.log("database connected")
}).catch(e => {
    console.log(e);
})


module.exports = {User};