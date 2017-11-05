export default {
  ADD_TODO ({ commit }, newTodo) {
    let todo = {
      id: Math.floor((Math.random() * 100) + 1),
      title: newTodo.title,
      description: newTodo.description,
      status: 0
    }
    commit('ADD_TODO_MUTATION', todo)
  },
  REMOVE_TODO ({ commit }, todoID) {
    commit('REMOVE_TODO_MUTATION', todoID)
  },
  CHANGE_TODO_STATUS ({ commit }, todoObj) {
    commit('CHANGE_TODO_STATUS_MUTATION', todoObj)
  },
  FETCH_DATA ({commit}) {
    let localStorageState = JSON.parse(localStorage.getItem('vuex'))
    commit('FETCH_INITIAL_DATA_MUTATION', localStorageState)
  }
}
