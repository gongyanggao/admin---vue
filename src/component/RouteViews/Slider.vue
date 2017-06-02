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
        <li v-for="(item, index) in menu_list" class="active treeview">
          <a href="#">
            <i :class="item.icon"></i> <span>{{item.name}}</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <router-link  v-for="(child, cindex) in item.children" tag="li" :to="{ 'name': child.name }" v-if="!child.hidden"><a href=""><i class="fa fa-circle-o"></i>{{child.name}}</a></router-link>
            
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
        menu_list: [],
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
       updateCurMenu(route) {
          var route = route || this.$route;
          if (route.matched.length) {
              var rootPath = route.matched[0].path,
                  fullPath = route.path;
              this.$store.dispatch('set_cur_route', {
                  rootPath,
                  fullPath
              });
              var routes = this.$router.options.routes;
              for (var i = 0; i < routes.length; i++) {
                  if (routes[i].path === rootPath && !routes[i].hidden) {
                      this.menu_list = routes[i].children;
                      break;
                  }
              }
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
