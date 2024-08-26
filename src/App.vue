<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <router-link to="/home">to Home</router-link><!-- 페이지 이동 링크, a태그로 변형되서 나옴 -->
    <router-view>

    </router-view><!-- 주소 URL 변경시 컴포넌트가 뿌려지는 지점 -->
  </div>
</template>

<script>
// import LoginFormComponent from './components/LoginFormComponent.vue'

export default {
  name: 'App',
  components: {
    // LoginFormComponent
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
