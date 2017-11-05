<template>
<div>
  <h1 class="text-center"> {{ laneName }} - <span v-text="todosLength"></span></h1> 
</div>
</template>

<script>
export default {
  name: 'LaneCounter',
  props: {
    laneName: [String],
    todosLength: [Number]
  }
}
</script>

<style>

</style>
