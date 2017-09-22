<template>
  <div class='menu-wrapper'>
    <template v-for="item in routes">
      <!--一级菜单【不带下拉】-->
      <router-link v-if="item.meta.show&&!item.meta.dropdown" :to="item.path">
        <el-menu-item :index="item.path" class='submenu-title-noDropdown'>
          <i v-if="item.meta.icon" class="fa fa-fw" :class="'fa-'+item.meta.icon"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
      </router-link>

      <!--一级菜单【带下拉】-->
      <el-submenu :index="item.path" v-if="item.meta.show&&item.meta.dropdown">
        <!--一级菜单【名称】-->
        <template slot="title">
          <i v-if="item.meta.icon" class="fa fa-fw" :class="'fa-'+item.meta.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <!--二级菜单-->
        <template v-for="child in item.children" v-if='child.meta.show'>
          <router-link :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              <i v-if="child.meta.icon" class="fa fa-fw" :class="'fa-'+child.meta.icon"></i>
              <span>{{child.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'sidebarItem',
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  i.fa {
    margin-right: 15px;
  }
</style>
