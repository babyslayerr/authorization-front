<template>
  <div class="loginForm">
    <input v-model="userId" placeholder="아이디 입력" type="text" />
    <input v-model="password" placeholder="비밀번호 입력" type="password">
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'LoginFormComponent', // 필수 X
  props: {
    msg: String
  },
  setup(){
    let userId = ref('');
    let password = ref('');


    return {userId, 'password':password}; //두 속성은 동일
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginForm{
  /*img파일과 거리두기*/
  margin: 100px;
}

input{
  margin: 10px;
}

</style>
