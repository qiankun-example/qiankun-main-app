import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import microApps from './micro-apps'
import store from './store'
import './styles/index.scss'
Vue.use(ElementUI)
// 0. 校验登陆信息
if(!window.localStorage.getItem('user')) {
  window.location.replace('/login')
}
// 1. 初始化
const instance = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// 切换向主应用传递加载状态
const loader = loading => {
  if (instance && instance.$children) {
    instance.$children[0].loading = loading
  }
};
/**
 * Step2 注册子应用
 */
const apps = microApps.map(item => {
  return {
    ...item,
    loader
  }
})


registerMicroApps(
  apps,
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
)

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/permission');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});