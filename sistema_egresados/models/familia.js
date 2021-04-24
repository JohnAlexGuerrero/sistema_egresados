const { Model, DataTypes } = require('sequelize')
const sequelize = require('../databases/db')

class Familia extends Model{}
Familia.init({
    name: DataTypes.STRING,
    nro_document: DataTypes.STRING,
    age: DataTypes.INTEGER,
    birthday: DataTypes.DATEONLY,
    family_relationship: DataTypes.STRING,
    occupation: DataTypes.STRING,
    egresadoId:{
        type: DataTypes.INTEGER,
        references:{
            model: 'egresados',
            key: 'id'
        }
    }
},{
    sequelize,
    modelName: 'familia'
})

module.exports = Familia