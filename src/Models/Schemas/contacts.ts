const Contacts = (sequelize, DataTypes) => {
  return sequelize.define('Contacts', {
    contactId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    contactTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactPhone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    contactEmail : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Contacts'
  })
}

export default Contacts;
