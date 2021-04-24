const { Model, DataTypes } = require('sequelize')
const sequelize = require('../databases/db')

class Laboral extends Model{}
Laboral.init({
    company: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    position_job: DataTypes.STRING,
    date_start: DataTypes.DATEONLY,
    date_end: DataTypes.DATEONLY,
    egresadoId: {
        type: DataTypes.INTEGER,
        references:{
            model: 'egresados', // <<< Note, its table's name, not object name
            Key: 'id' // <<< Note, its a column name
        }
    }
},{
    sequelize,
    modelName: 'laboral'
})

module.exports = Laboral