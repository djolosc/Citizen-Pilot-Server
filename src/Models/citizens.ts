const Citizens = (sequelize, DataTypes) => {
  return sequelize.define('Citizens', {
    citizenId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    citizenFName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    citizenLName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    citizenEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    citizenPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Citizens'
  })
}

export default Citizens;
