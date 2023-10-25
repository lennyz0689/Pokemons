const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    Nombre: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true
    },
    Imagen: {
      type: DataTypes.STRING(),
      unique: true
    },
    Vida: {
      type: DataTypes.INTEGER(),
      allowNull: false
    },
    Ataque: {
      type: DataTypes.INTEGER(),
      allowNull: false
    },
    Defensa: {
      type: DataTypes.INTEGER(),
      allowNull: false
    }
  }, { timestamps: false });
};
