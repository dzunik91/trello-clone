<template>
  <div id="app">
    <navbar-component></navbar-component>
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from './components/navbar-component/NavbarComponent'

export default {
  name: 'app',
  components: {
    'navbar-component': NavbarComponent
  },
  beforeCreate () {
    this.$store.dispatch('FETCH_DATA')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
