import types from 'sequelize'
import sequelize from '../services/postgresService.js'

const { DataTypes, Model } = types

class Count extends Model { }
Count.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  type: {
    type: DataTypes.STRING,
    unique: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'count'
})

Count.sync()

export default Count