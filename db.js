const Sequelize = require('sequelize')

const sequelize =new Sequelize('express','angela','angela',{
    host:'localhost',
    dialect:'postgres'

})

module.exports=sequelize