const Projects = (sequelize, DataTypes) => {
  return sequelize.define('Projects', {
    projectId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    projectTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectLocation : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    projectCompletion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Projects'
  })
}

export default Projects;
