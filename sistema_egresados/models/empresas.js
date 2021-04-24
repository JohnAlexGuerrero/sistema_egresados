const { Model, DataTypes } = require('sequelize')
const sequelize = require('../databases/db')

class Empresa extends Model{}
Empresa.init({
    nit:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    company: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    owner: DataTypes.STRING,
    facebook_link: {
        type: DataTypes.STRING,
        allowNull:true
    },
    instagram_link:{
        type: DataTypes.STRING,
        allowNull: true
    },
    whatsapp_link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    web_link:{
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    sequelize,
    modelName: 'empresa'
})

module.exports = Empresa