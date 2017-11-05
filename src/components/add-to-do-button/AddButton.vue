<template>
  <div class="add-todo">
    <input type="text" v-model="holder.title" class="form-control add-todo" placeholder="Add title">
    <input type="text" v-model="holder.description" class="form-control add-todo" placeholder="Add description">
    <button class="btn btn-primary" @click="addTodo">Add Todo</button>
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
  .add-todo {
    max-width: 300px;
    margin: 0 auto;
  }
</style>
