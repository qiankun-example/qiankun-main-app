/**@type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  outputDir: 'main_app',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/variables.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/boss': {
        target: 'http://eduboss.lagou.com',
        changeOrigin: true // 把请求头中host配置target
      },
      '/front': {
        target: 'http://edufront.lagou.com',
        changeOrigin: true // 把请求头中host配置target
      },
      '/login': {
        target: 'http://localhost:8002/',
        changeOrigin: true,
        pathRewrite: {
          '^/login': ''
        }
      }
    }
  }
}