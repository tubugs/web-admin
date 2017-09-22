import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout.vue'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const syncRouterMap = [
  {
    path: '/',
    component: Layout,
    name: '首页',
    redirect: '/index',
    meta: {
      show: true,
      dropdown: false,
      icon: 'home'
    },
    children: [{
      path: 'index',
      component: _import('home/index')
    }]
  },
  {
    path: '/small',
    component: Layout,
    name: '小组件',
    meta: {
      show: true,
      dropdown: true,
      icon: 'list'
    },
    children: [
      {
        path: 'sticky',
        component: _import('small/sticky'),
        name: 'sticky',
        meta: {
          show: true
        }
      }, {
        path: 'countTo',
        component: _import('small/countTo'),
        name: 'countTo',
        meta: {
          show: true
        }
      }, {
        path: 'backTop',
        component: _import('small/backTop'),
        name: 'backTop',
        meta: {
          show: true
        }
      }, {
        path: 'loading',
        component: _import('small/loading'),
        name: 'loading',
        meta: {
          show: true
        }
      }, {
        path: 'throttle',
        component: _import('small/throttle'),
        name: 'throttle',
        meta: {
          show: true
        }
      }, {
        path: 'excel',
        component: _import('small/excel'),
        name: 'excel',
        meta: {
          show: true
        }
      }, {
        path: 'icons',
        component: _import('small/icons'),
        name: 'icons',
        meta: {
          show: true
        }
      }]
  },
  {
    path: '/table',
    component: Layout,
    name: '表格',
    meta: {
      show: true,
      dropdown: true,
      icon: 'table'
    },
    children: [{
      path: 'component',
      component: _import('table/editable'),
      name: '可编辑表格',
      meta: {
        show: true
      }
    }]
  },
  {
    path: '/editor',
    component: Layout,
    name: '编辑器',
    meta: {
      show: true,
      dropdown: true,
      icon: 'pencil-square-o'
    },
    children: [{
      path: 'markdown',
      component: _import('editor/markdown'),
      name: 'markdown',
      meta: {
        show: true
      }
    }, {
      path: 'richText',
      component: _import('editor/richText'),
      name: '富文本',
      meta: {
        show: true
      }
    }]
  },
  {
    path: '/chart',
    component: Layout,
    name: '图表',
    meta: {
      show: true,
      dropdown: true,
      icon: 'line-chart'
    },
    children: [{
      path: 'brokenLine',
      component: _import('chart/brokenLine'),
      name: '折线图',
      meta: {
        show: true
      }
    }, {
      path: 'keyboard',
      component: _import('chart/keyboard'),
      name: '键盘图',
      meta: {
        show: true
      }
    }, {
      path: 'mix',
      component: _import('chart/mix'),
      name: '混合图',
      meta: {
        show: true
      }
    }]
  },
  {
    path: '/error',
    component: Layout,
    name: '错误',
    meta: {
      show: true,
      dropdown: true,
      icon: 'exclamation-circle'
    },
    children: [{
      path: '401',
      component: _import('error/401'),
      name: '没权限',
      meta: {
        show: true
      }
    }, {
      path: '404',
      component: _import('error/404'),
      name: '找不到页面',
      meta: {
        show: true
      }
    }, {
      path: 'vueError',
      component: _import('error/vueError'),
      name: 'vue错误',
      meta: {
        show: true
      }
    }]
  },
  {
    path: '/permission',
    component: Layout,
    name: '权限',
    meta: {
      show: true,
      dropdown: true,
      icon: 'sitemap'
    },
    children: [{
      path: 'role',
      component: _import('permission/role'),
      name: '角色',
      meta: {
        show: true
      }
    }, {
      path: 'permission',
      component: _import('permission/permission'),
      name: '权限',
      meta: {
        show: true
      }
    }, {
      path: 'organization',
      component: _import('permission/organization'),
      name: '组织',
      meta: {
        show: true
      }
    }, {
      path: 'user',
      component: _import('permission/user'),
      name: '用户',
      meta: {
        show: true
      }
    }]
  },
  {
    path: '/personal',
    component: Layout,
    name: '个人中心',
    meta: {
      show: true,
      dropdown: true,
      icon: 'user'
    },
    children: [{
      path: 'info',
      component: _import('personal/info'),
      name: '个人信息',
      meta: {
        show: true
      }
    }, {
      path: 'password',
      component: _import('personal/password'),
      name: '修改密码',
      meta: {
        show: true
      }
    }]
  }
]
export const asyncRouterMap = []

export default new Router({
  routes: syncRouterMap
})
