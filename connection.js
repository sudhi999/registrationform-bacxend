const Sequelize = require('sequelize')

const sequelize = new Sequelize('myntraTest','postgres','sudheer',{
    host: 'localhost',
    dialect:'postgres',
    port:5433,
    define: {
        paranoid: true
    }
})

module.exports = sequelize