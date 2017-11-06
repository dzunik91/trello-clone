<template>
  <div class="add-todo-hld">
    <h2>Add a new Todo:</h2>
    <div class="task card">
      <form v-on:submit.prevent>
        <div class="card-header">
          <input type="text" v-model="holder.title" class="form-control" placeholder="Add title" required>
        </div>
        <div class="card-body">
          <textarea v-model="holder.description" class="form-control" id="exampleTextarea" rows="3"  placeholder="Add description"></textarea>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" @click="addTodo">Add Todo</button>
        </div>
      </form>
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
      this.holder.title = ''
      this.holder.description = ''
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
