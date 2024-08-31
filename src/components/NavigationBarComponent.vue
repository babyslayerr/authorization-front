<script setup>
// routing 을 위한 navigation vue component

</script>

<template>
  <div>
    <router-link to="/">to Home</router-link> <!-- 페이지 이동 링크, a태그로 변형되서 나옴 -->
    <router-link to="/login">to Login</router-link>
    <router-link to="/signUp">to signUp</router-link> <!-- 휘원가입 페이지 링크-->
  </div>
</template>

<style scoped>
a{
  margin: 15px;
}

</style>