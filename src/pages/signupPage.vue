<script setup>

  // axios 로 서버 통신 - 회원 가입 api 호출
  import axios from "axios";

  const signup() = () =>{
    // 서버통신 TODO
    axios.post()
  }



</script>

<template>
  <div>
    <div>회원 가입 페이지</div>
    <input placeholder="가입 아이디"/>
    <input placeholder="가입 비밀번호">
    <button v-on:click="signup" type="button">회원가입</button>
  </div>
</template>

<style scoped>

</style>