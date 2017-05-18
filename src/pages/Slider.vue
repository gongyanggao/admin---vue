<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="~admin-lte/dist/img/user7-128x128.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{username}}</p>
          <!-- <a href="#"><i class="fa fa-circle text-success"></i>Online</a> -->
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
        <li class="header">MAIN NAVIGATION</li>
        <li class="active treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>反诈</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <router-link tag="li" :to="{ name: '总体信息' }"><a href=""><i class="fa fa-circle-o"></i>总体信息</a></router-link>
            <router-link tag="li" :to="{ name: '图表展示' }"><a href=""><i class="fa fa-circle-o"></i>图表展示</a></router-link>
          </ul>
        </li>
        
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'slider',
  data() {
      return {
        sid: '123',
        unreadMessagesCount: 5,
        unreadNotificationsCount: 2,
        remainTasksCount: 3
      }
    },
    computed: {
      username: function() {
        return this.$store.state.user.username || localStorage.username
      }
    },
    methods: {
     
    },
  created () {
      console.log(this.$store.state.user.username)
  }
}
</script>
<style scoped>
  .image{
    position: absolute;
    left: 20px;
    top: 15px;
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
</style>
