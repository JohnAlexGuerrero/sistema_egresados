const { Model, DataTypes } = require('sequelize')
const sequelize = require('../databases/db')

class Egresado extends Model{}
Egresado.init({
    id_number: {
        type: DataTypes.STRING,
        unique: true
    },
    userId:{
        type: DataTypes.INTEGER,
        references:{
            model: 'usuarios',
            key: 'id'
        }
    },
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    phone: DataTypes.STRING,
    marital_status: DataTypes.STRING,
    city_birth: DataTypes.STRING,
    address: DataTypes.STRING,
    neighborhood: DataTypes.STRING
},{
    sequelize,
    modelName: 'egresado'
})


module.exports = Egresado