<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../../static/img/user-0.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{username}}</p>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">工具栏菜单</li>
        <li class="treeview" v-for="(item,index) in toolOption" @click="openDialog(index)" v-touch-ripple>
          <a>
            <i :class="item.icon"></i> <span>{{item.name}}</span>
          </a>
        </li>
      </ul>
      
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { tools } from '../../constant/'
export default {
  name: 'slider',
  data() {
    return {
      toolOption: []
    }
  },
  computed: {
    username: function() {
      return this.$store.state.user.userinfo ? this.$store.state.user.userinfo.username : JSON.parse(localStorage.userinfo).userinfo.username
    }
  },
  methods: {
    openDialog(index) {
      this.$store.dispatch('open_dialog', {index});
    }
  },
  created () {
    this.toolOption = tools.option
  }
}
</script>
<style scoped>
  .image{
    position: absolute;
    left: 20px;
    top: 15px;
  }
  .sidebar-collapse .image{
    position: absolute;
    left: 6px;
    top: 10px;
  }
  .sidebar-collapse .image{
    max-width: 35px;
  }
  .user-panel{
    height: 60px;
  }
  .user-panel>.info {
    line-height: 45px;
    position: absolute;
    left: 75px;
    height: 45px;
    font-size: 20px;
  }
  .sidebar-menu>.treeview {
      cursor: pointer;
  }
</style>
