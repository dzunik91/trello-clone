import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 101, title: 'Task1', description: 'Sample Description1, Sample Description1, Sample Description1,Sample Description1, Sample Description1 ', status: 0 },
      { id: 223, title: 'Task3', description: 'Sample Description3, Sample Description3, Sample Description3,Sample Description3, Sample Description3 ', status: 0 },
      { id: 115, title: 'Task5', description: 'Sample Description5, Sample Description5, Sample Description5,Sample Description5, Sample Description5 ', status: 0 },
      { id: 114, title: 'Task4', description: 'Sample Description4, Sample Description4, Sample Description4,Sample Description4, Sample Description4 ', status: 1 },
      { id: 121, title: 'Task2', description: 'Sample Description2, Sample Description2, Sample Description2,Sample Description2, Sample Description2 ', status: 1 },
      { id: 116, title: 'Task6', description: 'Sample Description6, Sample Description6, Sample Description6,Sample Description6, Sample Description6 ', status: 1 }
    ]
  },
  mutations,
  actions,
  getters
})

export default store
