const { Model, DataTypes } = require('sequelize')
const sequelize = require('../databases/db')

class Estudio extends Model{}
Estudio.init({
    professional_title: DataTypes.STRING,
    institute: DataTypes.STRING,
    study_level: DataTypes.STRING,
    graduation: DataTypes.DATEONLY,
    egresadoId: {
        type: DataTypes.INTEGER,
        references:{
            model: 'egresados', // <<< Note, its table's name, not object name
            Key: 'id' // <<< Note, its a column name
        }
    }
},{
    sequelize,
    modelName: 'estudios'
})


module.exports = Estudio