const News = (sequelize, DataTypes) => {
  return sequelize.define('News', {
    newsId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    newsTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newsShortDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newsLongDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newsLocation : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newsImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    newsDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'News'
  })
}

export default News;
