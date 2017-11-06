const Todo = require('../models/todo')

module.exports = {
  showTodos: showTodos,
  addTodo: addTodo,
  deleteTodo: deleteTodo,
  changeStatus: changeStatus
}

function showTodos (req, res, next) {
  Todo.find({})
    .then(function (todos) {
      res.send(todos)
    })
}

function addTodo (req, res, next) {
  Todo.create(req.body)
    .then(function (todo) {
      res.send(todo)
    })
    .catch(next)
}

function deleteTodo (req, res, next) {
  Todo.findByIdAndRemove({_id: req.params.id})
    .then(function (todo) {
      res.send(todo)
    })
    .catch(function (error) {
      res.send(error)
    })
}

function changeStatus (req, res, next) {
  Todo.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function () {
      Todo.findOne({ _id: req.params.id }).then(function (todo) {
        res.send(todo)
      })
    })
    .catch(function (error) {
      res.send(error)
    })
}
