const Employees = (sequelize, DataTypes) => {
  return sequelize.define('Employees', {
    employeeId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    employeeFName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeLName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeePassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeDepartment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeePosition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeAccess: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Employees'
  })
}

export default Employees;
