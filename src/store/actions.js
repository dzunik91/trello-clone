import { HTTP } from '../hellpers/http-comon'

export default {
  ADD_TODO ({ commit }, newTodo) {
    let todoModel = {
      title: newTodo.title,
      description: newTodo.description,
      status: 0
    }
    if (todoModel.title !== '') {
      HTTP.post('todos/new', todoModel)
        .then(response => {
          let newTodo = response.data
          commit('ADD_TODO_MUTATION', newTodo)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  },
  REMOVE_TODO ({ commit }, todoID) {
    HTTP.delete(`todos/${todoID}`)
      .then(response => {
        commit('REMOVE_TODO_MUTATION', todoID)
      })
      .catch(error => {
        console.log(error)
      })
  },
  CHANGE_TODO_STATUS ({ commit }, todoObj) {
    HTTP.put(`todos/${todoObj.id}`, todoObj)
      .then(response => {
        commit('CHANGE_TODO_STATUS_MUTATION', todoObj)
      })
      .catch(error => {
        console.log(error.response)
      })
  },
  FETCH_DATA ({commit}) {
    HTTP.get('todos')
      .then(response => {
        const todos = response.data
        commit('FETCH_INITIAL_DATA_MUTATION', todos)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
}
