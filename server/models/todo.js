const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title field is required']
  },
  description: {
    type: String
  },
  status: Number
})

const Todo = mongoose.model('task', TodoSchema)

module.exports = Todo
