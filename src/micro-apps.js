console.log(process.env.VUE_APP_SUB_VUE, 'process.env.VUE_APP_SUB_VUE')
const microApps = [
  {
    name: 'qiankun-vue2-subapp',
    entry: process.env.VUE_APP_SUB_VUE,
    container: '#subapp-container',
    activeRule: '/qiankun-vue2-subapp',
    props: {
      routerBase: '/qiankun-vue2-subapp', // 子应用配置bash基础路由
    }
  }
]

export default microApps