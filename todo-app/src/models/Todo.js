import types from 'sequelize'
import sequelize from '../services/postgresService.js'

const { DataTypes, Model } = types

class Todo extends Model { }
Todo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING(140),
    defaultValue: ''
  },
  important: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'count'
})

Todo.sync()

export default Todo
