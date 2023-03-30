const Sequelize=require('sequelize')
const sequelize=require('/db')
const Model= sequelize.define('model',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull: true
    }
})
module.exports= Model