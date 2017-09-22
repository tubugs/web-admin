import Vue from 'vue'
import Vuex from 'vuex'
import {syncRouterMap, asyncRouterMap} from '@/router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    routers: []
  },
  mutations: {
    set_routers: (state, routers) => {
      state.routers = syncRouterMap.concat(routers)
    }
  },
  actions: {
    generateRoutes ({commit}, data) {
      commit('set_routers', asyncRouterMap)
    }
  },
  getters: {
    permission_routers: state => state.routers
  }
})

export default store
