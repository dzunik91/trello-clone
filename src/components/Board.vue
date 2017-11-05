<template>
  <div class="boards-hld container-fluid">
    <div class="buttons-hld text-center">
      <add-button />
    </div>
    <div class="row">
      <todos-list />
      <in-progress-list />
      <done-list />
    </div>
  </div>
</template>

<script>
import TodosList from './todo-lane/TodosList'
import InProgressList from './in-progress-lane/InProgressList'
import DoneList from './done-lane/DoneList'
import AddButton from './add-to-do/AddTodo'

export default {
  name: 'Board',
  data () {
    return {
    }
  },
  components: {
    'todos-list': TodosList,
    'in-progress-list': InProgressList,
    'done-list': DoneList,
    'add-button': AddButton
  }
}
</script>
