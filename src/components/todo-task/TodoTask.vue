<template>
  <div class="task card">
    <div class="card-header">
      <h4 class="card-title" v-text="title"></h4>
    </div>
    <div class="card-body">
      <p class="card-text" v-text="description"></p>
    </div>
    <div class="card-body">
      <p class="card-text">Actions</p>
      <label class="checkbox-inline"><input type="radio" :value="0" v-model="statusCheckbox">ToDo</label>
      <label class="checkbox-inline"><input type="radio" :value="1" v-model="statusCheckbox">InProgress</label>
      <label class="checkbox-inline"><input type="radio" :value="2" v-model="statusCheckbox">Done</label>
    </div>
    <div class="card-footer">
      <span class="badge" :class="taskClass" v-text="statusText"></span>
      <div class="action-btns-hld">
        <button v-if="doneTask" @click="removeTaskFromList(id)" class="btn btn-danger">Remove Task</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    status: [String, Number],
    description: [String],
    id: [String]
  },
  data () {
    return {
      taskClass: 'badge-default',
      doneTask: false
    }
  },
  methods: {
    removeTaskFromList (taskID) {
      return this.$store.dispatch('REMOVE_TODO', taskID)
    }
  },
  computed: {
    statusCheckbox: {
      get () {
        return this.status
      },
      set (statusValue) {
        this.$store.dispatch({
          type: 'CHANGE_TODO_STATUS',
          id: this.id,
          status: statusValue
        })
      }
    },
    statusText () {
      let taskStatus
      if (this.status === 0) {
        taskStatus = 'ToDo'
        this.taskClass = 'badge-primary'
      } else if (this.status === 1) {
        taskStatus = 'In Progress'
        this.taskClass = 'badge-warning'
      } else if (this.status === 2) {
        taskStatus = 'Done'
        this.taskClass = 'badge-success'
        this.doneTask = true
      }
      return taskStatus
    }
  }
}
</script>

<style lang="scss">
  .card {
    width: 20rem;
    max-height: 30rem;
  }
  .task {
    margin: 10px auto;
    border-radius: 10px;
    &__title {
      font-size: 16px;
    }
    &__description {
      font-size: 12px;
    }
  }
</style>
