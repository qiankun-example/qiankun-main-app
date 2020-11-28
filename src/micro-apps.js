console.log(process.env.VUE_APP_SUB_VUE, 'process.env.VUE_APP_SUB_VUE')
const microApps = [
  {
    name: 'permission',
    entry: process.env.VUE_APP_SUB_VUE,
    container: '#subapp-container',
    activeRule: '/permission',
    props: {
      routerBase: '/permission', // 子应用配置bash基础路由
    }
  }
]

export default microApps