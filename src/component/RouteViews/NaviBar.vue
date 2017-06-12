<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>V</b>ue</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>后台管理</b>系统</span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu router-nav">
        <ul class="nav navbar-nav">
          
        </ul>
      </div>
      <div class="navbar-custom-menu user-nav">
        <ul class="nav navbar-nav">
          <li class="dropdown messages-menu" v-for='(items,index) in $router.options.routes' v-if='!items.hidden'>
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i :class="items.icon"></i>{{items.name}}
            </a>
            <ul class="dropdown-menu">
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li v-for="item in items.children"><!-- start message -->
                      <h5>
                        <i :class="item.icon"></i>{{item.name}}
                      </h5>
                      <div></div>
                      <ul>
                        <router-link v-for="child in item.children" :to="{ 'name': child.name }" v-if="!child.hidden" tag="li">{{child.name}}</router-link>
                      </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-qq"></i>换肤
              <span class="label label-danger"></span>
            </a>
            <theme></theme>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="../../../static/img/user-0.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">{{username}}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="../../../static/img/user-0.jpg" class="img-circle" alt="User Image">

                <p>
                  {{username}} - wuhan
                  <small>2017-05-08</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <row>
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </row>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" @click="logout" title="注销登录"><i class="fa fa-sign-out"></i></a>
          </li>
        </ul>
      </div>

      <!-- Navbar Right Menu -->
      <!-- <div class="navbar-custom-menu router-nav">
        <ul class="nav navbar-nav">
          <router-link tag="li" v-for='(item,index) in $router.options.routes' v-if='!item.hidden' :to="{ 'name': item.name }" class="nav-menu" :class="{active: currentIndex === index}" @click="currentIndex = index">
          <a href="#">
              <i :class="item.icon"></i>{{item.name}}
            </a></router-link>
          
        </ul>
      </div> -->
    </nav>
  </header>
</template>

<script>
import Theme from './Theme.vue'
export default {
  name: 'navi-bar',
  data() {
    return {
      menu_list: [],
      unreadMessagesCount: 5,
      unreadNotificationsCount: 2,
      currentIndex: 0
    }
  },
  computed: {
    username: function() {
      return this.$store.state.user.userinfo ? this.$store.state.user.userinfo.username : JSON.parse(localStorage.userinfo).userinfo.username
    }
  },
  methods: {
    logout: function() {
      this.$confirm('将退出当前登录状态, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        });
      });
    },
    updateCurMenu(route) {
      var route = route || this.$route;
      if (route.matched.length) {
          var rootPath = route.matched[0].path,
              fullPath = route.path;
          this.$store.dispatch('set_cur_route', {
              rootPath,
              fullPath
          });
      } else {
          this.$router.push('/404');
      }
    }
  },
  created () {
    this.updateCurMenu();
  },
  watch: {
    $route(to, from) {
        this.updateCurMenu(to);
    }
  },
  components: { Theme }
}

</script>

<style scoped>
  .navbar-nav>li i.fa {
    margin-right: 5px;
  }
  .navbar-nav .dropdown-menu {
    box-shadow: 0 6px 12px rgba(0,0,0,.3);
  }
  .navbar-nav>li>.dropdown-menu {
    width: 500px;
  }
  .navbar-nav>.tasks-menu>.dropdown-menu{
    width: 160px!important;
  }
  .navbar-nav>.user-menu>.dropdown-menu{
    width: 300px!important;
  }
  .navbar-nav .dropdown-menu>li .menu>li {
    padding: 8px;
  }
  .navbar-nav .dropdown-menu>li .menu>li>h5{
    margin: 5px 0;
    text-indent: 5px;
  }
  .navbar-nav .dropdown-menu>li .menu>li>div{
    height: 1px;
    width: 100%;
    margin: 3px 0;
    background-color: #0099cc;
  }
  .navbar-nav .dropdown-menu>li .menu>li>ul{
    overflow: hidden;
    display: block;
    padding-left: 0px;
    list-style: none;
  }
  .navbar-nav .dropdown-menu>li .menu>li>ul>li{
    display: inline-block;
    float: left;
    font-size: 12px;
    color: #888888;
    cursor: pointer;
    padding: 5px 10px;
  }
  .navbar-nav .dropdown-menu>li .menu>li>ul>li:hover{
    color: #0099ff;
    text-decoration: underline;
  }
</style>