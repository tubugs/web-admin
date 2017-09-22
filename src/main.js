// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import NProgress from 'nprogress' // Progress 进度条
import router from './router'
import store from './store'
import App from './App'

import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'
import 'nprogress/nprogress.css'// Progress 进度条样式

Vue.config.productionTip = false

Vue.use(Element)

// TODO 每次进入路由执行
router.beforeEach((to, from, next) => {
  // console.log('router.beforeEach')
  NProgress.start() // 开启Progress
  if (store.state.routers.length === 0) {
    store.dispatch('generateRoutes')
  }
  next()
})

// TODO 每次离开路由执行
router.afterEach(() => {
  // console.log('router.afterEach')
  NProgress.done() // 结束Progress
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
