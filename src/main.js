// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import 'normalize.css/normalize.css';// normalize.css 样式格式化
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import App from './App'
import store from './store'
import './icons'


Vue.config.productionTip = false

Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
