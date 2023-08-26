const sequelize = require('../connection.js')
const Sequelize = require('sequelize')

const User = sequelize.define('users',{
    id : {
        type : Sequelize.UUID,
        defaultValue : Sequelize.UUIDV4,
        primaryKey : true,
        allowNull : false
    },
    fullName : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    mobileNumber : {
        type : Sequelize.STRING,
        allowNull: false
    },
    state : {
        type : Sequelize.STRING,
        allowNull: false
    },
    city : {
        type : Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User