<template>
  <div class="app-wrapper" :class="{hideSidebar:!sliderOpen}">
    <!--侧边栏-->
    <el-menu mode="vertical" theme="dark" unique-opened class="sidebar-container" :collapse="!sliderOpen">
      <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>

    <div class="main-container">
      <!--上方栏-->
      <el-menu class="navbar" mode="horizontal">
        <!--展开折叠按钮-->
        <div class="hamburger-container">
          <i class="fa fa-bars hamburger" :class="{active:sliderOpen}" @click="sliderOpen=!sliderOpen"></i>
        </div>
        <!--面包屑-->
        <el-breadcrumb class="app-levelbar" separator="/">
          <el-breadcrumb-item v-for="(item,index)  in breadcrumb" :key="item.path">
            <span v-if='item.meta.dropdown||index===breadcrumb.length-1' class="no-redirect">{{item.name}}</span>
            <router-link v-else :to="item.path">{{item.name}}</router-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <!--历史标签-->
        <div class='tabs-view-container'>
          <router-link class="tabs-view" v-for="tag in lastVisitedViews" :to="tag.path" :key="tag.path">
            <el-tag :closable="true" :type="isTagActive(tag.path)?'primary':''" @close='delVisitedViews(tag,$event)'>
              {{tag.name}}
            </el-tag>
          </router-link>
        </div>

        <!--头像及下拉-->
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img class="user-avatar" src="/static/avatar.gif">
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu class="user-dropdown" slot="dropdown">
            <router-link class='inlineBlock' to="/">
              <el-dropdown-item>
                首页
              </el-dropdown-item>
            </router-link>
            <a target='_blank' href="https://github.com/PanJiaChen/vue-element-admin/">
              <el-dropdown-item>
                项目地址
              </el-dropdown-item>
            </a>
            <el-dropdown-item divided><span style="display:block;">退出登录</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu>
      <!--主窗口-->
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>


<script>
  import sidebarItem from '@/layout/sidebarItem.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'layout',
    components: {
      sidebarItem
    },
    computed: {
      ...mapGetters([
        'permission_routers'
      ]),
      breadcrumb () {
        let matched = this.$route.matched.filter(item => item.name)
        let first = matched[0]
        if (first && first.name !== '首页') {
          return [{name: '首页', path: '/', meta: {}}].concat(matched)
        }
        return matched
      },
      lastVisitedViews () {
        return this.visitedViews.slice(-6)
      }
    },
    methods: {
      addVisitedViews () {
        console.log('addVisitedViews：' + this.$route.path)
        var views = this.visitedViews.filter(view => view.path !== this.$route.path)
        var last = this.$route.matched[this.$route.matched.length - 1]
        if (last.meta.show) {
          views.push({name: last.name, path: this.$route.path})
        } else {
          var first = this.$route.matched[0]
          views.push({name: first.name, path: this.$route.path})
        }
        this.visitedViews = views
      },
      delVisitedViews (tag, $event) {
        this.visitedViews = this.visitedViews.filter(view => view.path !== tag.path)
        var views = this.visitedViews.concat()
        if (this.isTagActive(tag.path)) {
          const lastView = views.slice(-1)[0]// 获取数组的最后一个元素
          if (lastView) {
            console.log('push：' + lastView.path)
            this.$router.push(lastView.path)
          } else {
            this.$router.push('/')
          }
        }
        $event.preventDefault()
      },
      isTagActive (path) {
        return path === this.$route.path
      }
    },
    data () {
      return {sliderOpen: true, visitedViews: []}
    },
    watch: {
      $route () {
        this.addVisitedViews()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    &.hideSidebar {
      .sidebar-container {
        width: 36px;
        overflow: inherit;
      }
      .main-container {
        margin-left: 36px;
      }
    }

    .sidebar-container {
      transition: width 0.28s ease-out;
      width: 180px;
      height: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow-y: auto;
    }

    .main-container {
      min-height: 100%;
      transition: margin-left 0.28s ease-out;
      margin-left: 180px;
    }

    .navbar {
      height: 50px;
      line-height: 50px;
      border-radius: 0px !important;
      .hamburger-container {
        float: left;
        padding: 0 15px;
        line-height: 50px;
        font-size: 20px;
        .hamburger {
          display: inline-block;
          cursor: pointer;
          width: 20px;
          height: 20px;
          transform: rotate(0deg);
          transition: .38s;
          transform-origin: 50% 50%;
          &.active {
            transform: rotate(90deg);
          }
        }
      }

      .app-levelbar {
        float: left;
        &.el-breadcrumb {
          display: inline-block;
          font-size: 14px;
          line-height: 50px;
          margin-left: 10px;
        }
        .no-redirect {
          color: #97a8be;
          cursor: text;
        }
      }

      .tabs-view-container {
        font-size: 16px;
        float: left;
        vertical-align: top;
        margin-left: 10px;
        .tabs-view {
          margin-left: 10px;
        }
      }

      .avatar-container {
        height: 50px;
        display: inline-block;
        position: absolute;
        right: 35px;
        .avatar-wrapper {
          cursor: pointer;
          margin-top: 5px;
          position: relative;
          .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
          .el-icon-caret-bottom {
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
