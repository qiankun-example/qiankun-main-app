console.log(process.env.VUE_APP_SUB_VUE, 'process.env.VUE_APP_SUB_VUE')
const microApps = [
  {
    name: 'qiankun-vue2-subapp',
    entry: process.env.VUE_APP_SUB_VUE,
    container: '#subapp-container',
    activeRule: '/qiankun-vue2-subapp'
  }
]

export default microApps