import Vue from 'vue'

export default {
  CHANGE_TODO_STATUS_MUTATION (state, todoObj) {
    const task = state.todos.find(todo => todo.id === todoObj.taskID)
    Vue.set(task, 'status', todoObj.status)
  },
  ADD_TODO_MUTATION (state, newTodo) {
    state.todos.push(newTodo)
  },
  REMOVE_TODO_MUTATION (state, todoID) {
    const todoToRemove = state.todos.find(todo => todo.id === todoID)
    state.todos.splice(state.todos.indexOf(todoToRemove), 1)
  }
}