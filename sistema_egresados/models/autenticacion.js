const { Model, DataTypes } = require('sequelize')
const sequelize = require('../databases/db')

class Usuario extends Model{}
Usuario.init({
    email:{
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
},{
    sequelize,
    modelName: 'usuario'
})

module.exports = Usuario