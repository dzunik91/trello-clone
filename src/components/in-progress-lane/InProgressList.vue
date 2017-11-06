<template>
  <div class="col-md-4 col-xs-12">
    <lane-counter
      laneName="In Progress"
      :todosLength="tasksInProgressLength"
    />
    <todo-task 
      v-for="task in tasksList"
      :key="task._id"
      :title="task.title"
      :description="task.description"
      :status="task.status"
      :id="task._id"
    />
  </div>
</template>

<script>
import TodoTask from '../todo-task/TodoTask'
import LaneCounter from '../lane-counter/LaneCounter'

export default {
  name: 'InProgressList',
  data () {
    return {
    }
  },
  components: {
    'todo-task': TodoTask,
    'lane-counter': LaneCounter
  },
  computed: {
    tasksList () {
      return this.$store.getters.tasksInProgress
    },
    tasksInProgressLength () {
      return this.$store.getters.tasksInProgressLength
    }
  }
}
</script>

<style>

</style>