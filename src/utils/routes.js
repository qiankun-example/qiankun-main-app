/**
 * @name 跨应用路由跳转
 * @param {*} href 
 * @param {*} title 
 * @param {*} stateObj 
 */
export function routerGo(href = '/', title = null, stateObj = {}) {
  window.history.pushState(stateObj, title, href);
}