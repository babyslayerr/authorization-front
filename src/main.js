import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue"; // routing 을 위한 vue 라우터 추가

// vue createApp 함수에 사용할 router 상수 추가
let router = createRouter({
    // Vue 3는 mode 속성 대신 history 속성 사용
    history: createWebHistory(), // createMemoryHistory()은 메모리 history 로 SSR 에서 사용 됨
    routes: [ // 컴포넌트와 URL 매핑 설정
        {path:'/home', component : MainPage}
    ]
})


createApp(App)
    .use(router) // vue 앱 생성시 router 추가
    .mount('#app')
