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
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">{{ unreadMessagesCount }}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have {{ unreadMessagesCount }} messages</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li><!-- start message -->
                    <a href="#">
                      <div class="pull-left">
                        <img src="../../../static/img/user-0.jpg" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Support Team
                        <small><i class="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <!-- end message -->
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="~admin-lte/dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        AdminLTE Design Team
                        <small><i class="fa fa-clock-o"></i> 2 hours</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="~admin-lte/dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Developers
                        <small><i class="fa fa-clock-o"></i> Today</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="~admin-lte/dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Sales Department
                        <small><i class="fa fa-clock-o"></i> Yesterday</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="~admin-lte/dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Reviewers
                        <small><i class="fa fa-clock-o"></i> 2 days</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">See All Messages</a></li>
            </ul>
          </li>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">{{ unreadNotificationsCount }}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have {{ unreadNotificationsCount }} notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-aqua"></i> 5 new members joined today
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                      page and may cause design problems
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-red"></i> 5 new members joined
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user text-red"></i> You changed your username
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>
          <!-- Tasks: style can be found in dropdown.less -->
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              换肤
              <i class="fa fa-qq"></i>
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
      <div class="navbar-custom-menu router-nav">
        <ul class="nav navbar-nav">
          <router-link tag="li" v-for='(item,index) in $router.options.routes' v-if='!item.hidden' :to="{ 'name': item.name }" class="nav-menu" :class="{active: currentIndex === index}" @click="currentIndex = index">
          <a href="#">
              <i :class="item.icon"></i>{{item.name}}
            </a></router-link>
          
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Theme from './Theme.vue'
export default {
  name: 'navi-bar',
  data() {
    return {
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
      this.$router.push('/')
    }
  },
  components: { Theme }
}

</script>

<style scoped>
  .router-nav {
    float: left;
  }
  .router-nav li i.fa {
    margin-right: 5px;
  }
  .router-nav li.active>a {
    font-weight: bold;
  }
  .router-nav li.active i.fa {
    color: aqua;
  }
</style>