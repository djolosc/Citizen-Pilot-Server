require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: process.env.DB_DB,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
});

const models ={
  Contacts: sequelize.import('./contacts'),
  Proposals: sequelize.import('./proposals'),
  Favourites: sequelize.import('./favourites'),
  News: sequelize.import('./news'),
  Projects: sequelize.import('./projects'),
  Reports: sequelize.import('./reports'),
  Citizens: sequelize.import('./citizens'),
  Employees: sequelize.import('./employees'),
}

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
