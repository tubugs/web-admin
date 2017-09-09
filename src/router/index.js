import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'views/layout/Layout'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true},
  {path: '/404', component: _import('errorPage/404'), hidden: true},
  {path: '/401', component: _import('errorPage/401'), hidden: true},
  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'xinrenzhinan',
    noDropdown: true,
    children: [{path: 'index', component: _import('introduction/index'), name: '简述'}]
  },
  {
    path: '/icon',
    component: Layout,
    icon: 'icons',
    noDropdown: true,
    children: [{path: 'index', component: _import('svg-icons/index'), name: 'icons'}]
  }
]

export const asyncRouterMap = []

export default new Router({
  routes: constantRouterMap
})


