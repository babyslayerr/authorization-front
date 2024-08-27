<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <NavigationBarComponent></NavigationBarComponent>
    <router-view>

    </router-view><!-- 주소 URL 변경시 컴포넌트가 뿌려지는 지점 -->
  </div>
</template>

<script>
import NavigationBarComponent from "@/components/NavigationBarComponent.vue";

export default {
  name: 'App',
  components: {
    NavigationBarComponent
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
