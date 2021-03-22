const Favourites = (sequelize, DataTypes) => {
  return sequelize.define('Favourites', {
    favouriteId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    favouriteTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favouriteDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favouriteLocation : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favouriteImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favouriteVotes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Favourites'
  })
}

export default Favourites;
