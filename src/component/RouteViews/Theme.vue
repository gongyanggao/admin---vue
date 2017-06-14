<template>
<ul class="dropdown-menu">
  <li>
    <ul class="menu-ul">
      <li v-for="item in themes">
        <a href="#" @click="changeTheme(item.bg)">
          
          <div class="progress xs">

            <div class="progress-bar" :class="item.class" style="width: 100%" :style="item.style" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{{item.name}}
            </div>
          </div>
        </a>
      </li>
     
    </ul>
  </li>
</ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'theme',
  data() {
      return {
        themes: [{
        		name: '浅蓝', class: 'bg-light-blue', style: '', bg: 'sidebar-mini skin-blue-light'
        	}, {
        		name: '浅灰', class: '', style: 'background: #ddd;', bg: 'sidebar-mini skin-black-light'
        	}, {
        		name: '浅紫', class: 'bg-purple', style: '', bg: 'sidebar-mini skin-purple-light'
        	}, {
        		name: '浅绿', class: 'bg-green', style: '', bg: 'sidebar-mini skin-green-light'
        	}, {
        		name: '浅红', class: 'bg-red', style: '', bg: 'sidebar-mini skin-red-light'
        	}, {
        		name: '浅黄', class: 'bg-yellow', style: '', bg: 'sidebar-mini skin-yellow-light'
        	}, {
        		name: '深蓝', class: 'bg-light-blue', style: '', bg: 'sidebar-mini skin-blue'
        	}, {
        		name: '深灰', class: '', style: 'background: #ddd;', bg: 'sidebar-mini skin-black'
        	}, {
        		name: '深紫', class: 'bg-purple', style: '', bg: 'sidebar-mini skin-purple'
        	}, {
        		name: '深绿', class: 'bg-green', style: '', bg: 'sidebar-mini skin-green'
        	}, {
        		name: '深红', class: 'bg-red', style: '', bg: 'sidebar-mini skin-red'
        	}, {
        		name: '深黄', class: 'bg-yellow', style: '', bg: 'sidebar-mini skin-yellow'
        	}]
        }
    },
    computed: mapState({
	    theme: state => state.theme.theme_class
	  }),
    methods: {
       changeTheme(bg) {
        this.$store.dispatch('set_theme', { bg })
        this.$root.$el.parentNode.className =  bg
      }
    },
    created () {
      this.$root.$el.parentNode.className =  this.theme
    },
    mounted() {
      
    }
}
</script>
<style scoped>
.menu-ul{
  padding-top: 10px;
  display: block;
  padding-left: 0px;
  list-style: none;
  height: 200px;
  overflow-y: auto;
}
.menu-ul>li{
  display: list-item;
}
.menu-ul>li>a{
  display: block;
  white-space: nowrap;
  border-bottom: 1px solid #f4f4f4;
}
.progress.xs, .progress-xs{
	height: initial!important;
}
</style>
