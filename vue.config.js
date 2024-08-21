const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      '/api' : {
        target : 'http://localhost:8080', // 포워딩 할 서버의 주소
        changeOrigin : true, // 오리진 변경 여부(포트 변경이므로 true)x
      }
    }
  }
})
