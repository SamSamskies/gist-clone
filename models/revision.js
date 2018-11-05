"use strict";

module.exports = (sequelize, DataTypes) => {
  const Revision = sequelize.define(
    "Revision",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      }
    },
    {}
  );
  Revision.associate = function(models) {
    Revision.belongsTo(models.Gist, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    Revision.hasMany(models.File);
  };
  return Revision;
};
