<template>
  <div class="add-todo-hld">
    <h2>Add a new Todo:</h2>
    <div class="task card">
        <div class="card-header">
          <input type="text" v-model="holder.title" class="form-control" placeholder="Add title">
        </div>
        <div class="card-body">
          <input type="text" v-model="holder.description" class="form-control" placeholder="Add description">
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" @click="addTodo">Add Todo</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AddButton',
  data () {
    return {
      holder: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    addTodo () {
      this.$store.dispatch('ADD_TODO', this.holder)
      this.holder = ''
    }
  }
}
</script>

<style>
  .add-todo-hld {
    max-width: 300px;
    margin: 20px auto;

  }
</style>
