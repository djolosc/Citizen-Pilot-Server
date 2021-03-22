import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Citizens extends Model<Citizens> {
  @Column citizenId :{
    type: string;
    primaryKey: boolean;

  }

}
// const Citizens = (sequelize, DataTypes) => {
//   return sequelize.define('Citizens', {
//     citizenId: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//       allowNull: false,
//       unique: true,
//     },
//     citizenFName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     citizenLName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     citizenEmail: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     citizenPassword: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   }, {
//     sequelize,
//     modelName: 'Citizens'
//   })
// }

// export default Citizens;
