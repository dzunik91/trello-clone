export default {
  tasksToDo: state => state.todos.filter(todo => todo.status === 0),
  tasksToDoLength: state => state.todos.filter(todo => todo.status === 0).length,
  tasksInProgress: state => state.todos.filter(todo => todo.status === 1),
  tasksInProgressLength: state => state.todos.filter(todo => todo.status === 1).length,
  tasksDone: state => state.todos.filter(todo => todo.status === 2),
  tasksDoneLength: state => state.todos.filter(todo => todo.status === 2).length
}
