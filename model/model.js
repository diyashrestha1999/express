const Sequelize=require('sequelize')
const sequelize=require('../db')
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
    },
    age:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    race:{
        type:Sequelize.STRING,
        allowNull:true
    },
    culture:{
        type:Sequelize.STRING,
        allowNull:true
    }
})
module.exports= Model