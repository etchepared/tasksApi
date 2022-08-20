const { Rol } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "taskmanager",
    {
      idRol: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      typeRol: {
        type: ENUM("admin", "hm", "inst"),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    },
    { paranoid: true }
  );
};
