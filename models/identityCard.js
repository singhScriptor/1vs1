const {DataTypes}=require('sequelize')

const sequelize = require('../utils/db-connection')
const student = require('./studentTable')

const identityCard = sequelize.define('idcard',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    idCard:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    },
    studentId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:student,
            key:'id'
        }

    }

})
module.exports = identityCard