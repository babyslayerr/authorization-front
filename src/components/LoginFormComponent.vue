<template>
  <div v-if="!isLogin" class="loginForm"><!--로그인 되어있을 시-->
    <input v-model="userId" placeholder="아이디 입력" type="text" />
    <input v-model="password" placeholder="비밀번호 입력" type="password">
    <button v-on:click="getLogin">로그인</button>
  </div>
  <div v-if="isLogin">
    환영합니다 {{ userId }}!!!
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";

export default {
  name: 'LoginFormComponent', // 필수 X
  // 부모 컴포넌트에서 받는 속성값
  props: {
    msg: String
  },
  setup(){
    // 통신할 유저 아이디 및 패스워드
    let userId = ref('');
    let password = ref('');
    // 로그인 여부를 판단하는 불린값
    let isLogin = ref(false);

    // 템플릿에서 사용할 함수 표현식 정의
    const getLogin = () => {
      // 서버로의 통신
      axios.post("http://localhost:8080/api/login", {
          userId : userId.value,
          password : password.value
      },{
        withCredentials: true //쿠키, Authorization 인증 헤더같은 자격인증을 사용하는 여부로로 보통 라이브러리에서는 기본적으로 false로 되어있음 // httpOnly가 붙어있는 쿠키의 경우 해당 설정값이 없으면 전송하지 않음
      }).then((response)=>{
        // 서버 응답값이 아래와 같을 경우
        response.data = "success"
        // 로그인 여부를 true로 변경
        isLogin.value = true

      })
    }

    // vue 앱이 마운트시 사용될 로그인 체크 함수
    // 역시 민감한정보쿠키가(session) 가 포함되어 있기 때문에 withCredentials 옵션값을 추가해야한다
    const checkLogin = () => {
      axios.get("http://localhost:8080/api/checkLogin",{
        withCredentials:true //쿠키, Authorization 인증 헤더같은 자격인증을 사용하는 여부로로 보통 라이브러리에서는 기본적으로 false로 되어있음 // httpOnly가 붙어있는 쿠키의 경우 해당 설정값이 없으면 전송하지 않음
      })
          .then((response) =>{
            // 로그인 여부 set
            isLogin.value = response.data.isLogin === 'true'? true : false
            // userId set
            userId.value = response.data.userId
          }).catch((error)=>{
            // 에러 출력
            console.error(error)
            // 에러시 로그인 X
            isLogin.value = false;
      })
    }

    // setup시 항상 실행
    checkLogin()
    // 마운트 훅시 로그인 체크(앱이 dom객체에 마운트 즉 연결 되었을 때, 보통 dom객체 사용이 필요할 때 사용한다)
    onMounted(()=>{
      // checkLogin()
    })

    return {userId, 'password':password,isLogin, getLogin}; //두 속성은 동일
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
  /* margine-top 0 , center*/
  margin: 0 auto;
  /* buuton border 두께, 스타일, 컬러*/
  border: 1px solid #ddd;
  background-color: #fff;
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
