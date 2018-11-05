"use strict";

module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    "File",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: DataTypes.STRING,
      content: DataTypes.STRING
    },
    {}
  );
  File.associate = function(models) {
    File.belongsTo(models.Revision, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return File;
};
