const {DataTypes}=require('sequelize')

const sequelize = require('../utils/db-connection')

const student = sequelize.define('students',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }

})

module.exports = student

