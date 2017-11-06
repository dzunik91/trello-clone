const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todos.controller')
const cors = require('cors')

router.get('/todos', cors(), todoController.showTodos)

router.put('/todos/:id', cors(), todoController.changeStatus)

router.post('/todos/new', cors(), todoController.addTodo)

router.delete('/todos/:id', cors(), todoController.deleteTodo)

module.exports = router
