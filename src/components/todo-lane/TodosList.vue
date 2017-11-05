<template>
  <div class="col-md-4 col-xs-12">
    <lane-counter
      laneName="ToDos"
      :todosLength="todosLength"
    />
    <todo-task 
      v-for="task in todosTasks"
      :key="task.id"
      :title="task.title"
      :description="task.description"
      :status="task.status"
      :id="task.id"
    />
  </div>
</template>

<script>
import TodoTask from '../todo-task/TodoTask'
import LaneCounter from '../lane-counter/LaneCounter'

export default {
  name: 'TodoList',
  data () {
    return {
    }
  },
  components: {
    'todo-task': TodoTask,
    'lane-counter': LaneCounter
  },
  computed: {
    todosLength () {
      return this.$store.getters.tasksToDoLength
    },
    todosTasks () {
      return this.$store.getters.tasksToDo
    }
  }
}
</script>

<style>

</style>
