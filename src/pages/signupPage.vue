<script setup>

// axios 로 서버 통신 - 회원 가입 api 호출
import axios from "axios";
import {ref} from "vue";
import {useRouter} from "vue-router";

// vue-router 에서 제공하는 useRouter 를 통해 인스턴스를 가져온다
const router = useRouter();


  const userId = ref('');
  const password = ref('');

  // signUp 함수 등록 - 회원가입 api 호출
  const signUp = () =>{
    // 서버통신
    axios.post("http://localhost:8080/api/signUpMember",{
      userId : userId.value,
      password : password.value
      })
        .then((response)=>{

          alert(response.data);
          // 회원 가입 후 메인 페이지로
          // router 인스턴스를 사용
          router.replace({
            path : '/'
          })
        })
        .catch((error)=>{
          // 사용자도 에러 확인
          alert(error);
          // 에러 출력
          console.error(error);
        })
  }



</script>

<template>
  <div>
    <div>회원 가입 페이지</div>
    <input v-model="userId" placeholder="가입 아이디" type="text"/>
    <input v-model="password" placeholder="가입 비밀번호" type="password">
    <button v-on:click="signUp()" type="button">회원가입</button>
    <button v-on:click="this.$router.push('/')" type="button">메인페이지</button>
  </div>
</template>

<style scoped>
.loginForm{
  /*img파일과 거리두기*/
  margin: 100px;


}
button{
  /* 버튼 Block속성 지정*/
  display: block;
  /* margine-top 0 , center*/
  margin: 0 auto;
  /* buuton border 두께, 스타일, 컬러*/
  border: 3px solid #77af9c;
  /*모서리 라운딩 처리*/
  border-radius: 15px;
  background-color: #fff;

  /*font 진하기*/
  font-weight: 600;

  /*버튼크기를 위한 확장*/
  padding: 10px 30px;

  /*글자색상*/
  color: darkgray;

  /* 버튼 간격 조절*/
  margin-top: 10px;


}

input{
  /*input border 두께, 스타일, 컬러 */
  border: 3px solid #ddd;
  border-radius: 5px;
  font-family: '맑은 고딕';
  margin: 10px;
  /* 높이 조절 */
  padding: 10px;
}
</style>