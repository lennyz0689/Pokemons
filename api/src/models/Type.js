const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('type',{
        id: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false
        }
    },{timestamps: false})
}