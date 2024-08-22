<template>
  <div class="loginForm">
    <input v-model="userId" placeholder="아이디 입력" type="text" />
    <input v-model="password" placeholder="비밀번호 입력" type="password">
    <button>로그인</button>
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
button{
  /* 버튼 Block속성 지정*/
  display: block;
}

input{
  /*input border 두께, 스타일, 컬러 */
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: '맑은 고딕';

  margin: 10px;
  /* 높이 조절 */
  padding: 10px;
}

</style>
