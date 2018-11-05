"use strict";
module.exports = (sequelize, DataTypes) => {
  const Gist = sequelize.define(
    "Gist",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      description: DataTypes.STRING
    },
    {}
  );
  Gist.associate = function(models) {
    Gist.hasMany(models.Revision);
  };
  return Gist;
};
