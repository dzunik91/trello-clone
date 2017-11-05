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
    const localStorageStateTodos = JSON.parse(localStorage.getItem('vuex')).todos
    if (localStorageStateTodos) {
      const localStorageStateTodo = localStorageStateTodos.find(todo => todo.id === todoID)
      const isTaskInLocalStorageArray = localStorageStateTodos.includes(localStorageStateTodo)
      if (!isTaskInLocalStorageArray) {
        state.todos.splice(state.todos.indexOf(todoToRemove), 1)
        alert('Somebody already removed it')
      } else {
        state.todos.splice(state.todos.indexOf(todoToRemove), 1)
      }
    }
  },
  FETCH_INITIAL_DATA_MUTATION (state, localStorageState) {
    state.todos = localStorageState.todos
  }
}
