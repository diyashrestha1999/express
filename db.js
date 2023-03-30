const Sequelize = require('sequelize')

const sequalize =new Sequelize('express','express','express',{
    host:'localhost',
    dialect:'postgres'

})

module.exports=sequalize