const Reports = (sequelize, DataTypes) => {
  return sequelize.define('Reports', {
    reportId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    reportCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reportDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reportLongitude : {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reportLatitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reportUrgency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reportImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Reports'
  })
}

export default Reports;
