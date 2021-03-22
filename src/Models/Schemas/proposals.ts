const Proposals = (sequelize, DataTypes) => {
  return sequelize.define('Proposals', {
    proposalId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    proposalTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proposalDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proposalLocation : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proposalImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proposalVotes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Proposals'
  })
}

export default Proposals;
