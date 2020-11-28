import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: JSON.parse(window.localStorage.getItem('isCollapse') || 'true')
  },
  getters: {
    permission_routes: state => state.user.routes,
  },
  mutations: {
    setIsCollapse(state, payload) {
      state.isCollapse = payload
      window.localStorage.setItem('isCollapse', payload)
    }
  },
  actions: {
  },
  modules: {
    user
  }
})
