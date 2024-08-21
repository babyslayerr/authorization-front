<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <LoginFormComponent />
</template>

<script>
import LoginFormComponent from './components/LoginFormComponent.vue'

export default {
  name: 'App',
  components: {
    LoginFormComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
