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
  chainWebpack: config => {
    const cdn = {
      dev: {
        css: [],
        js: []
      },
      prd: {
        css: [
          // element-ui css
          '//cdn.bootcdn.net/ajax/libs/element-ui/2.13.0/theme-chalk/index.css'
        ],
        js: [
          // vue
          '//cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
          // vue-router
          '//cdn.bootcdn.net/ajax/libs/vue-router/3.0.6/vue-router.min.js',
          // axios
          '//cdn.bootcdn.net/ajax/libs/axios/0.18.1/axios.min.js',
          // element-ui js
          '//cdn.bootcdn.net/ajax/libs/element-ui/2.13.0/index.js'
        ]
      }
    }
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    // 设置html
    config.plugin('html')
      .tap(args => {
        args[0].cdn = process.env.NODE_ENV === 'production' ? cdn.prd : cdn.dev
        return args
      })
  },
  configureWebpack: {
    externals: process.env.NODE_ENV === 'production' ? {
      'vue': 'Vue',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
    } : {}
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