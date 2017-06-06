<template>
  <div class="wrapper">
  	<navi-bar></navi-bar>
  	<slider></slider>
    	
  	<div id="content-wrap" ref="wrapper" class="content-wrapper" >
	    <c-breadcrumb></c-breadcrumb>
    	<router-view></router-view>
	  </div>
  </div>
</template>
<script>
  import NaviBar from './NaviBar'
	import Slider from './Slider'
	import Common from '../Common/'
  export default {
    name: 'home',
    components: { CBreadcrumb: Common.CBreadcrumb, NaviBar, Slider }
  }
</script>
<style scoped lang='less'>
  .wrapper{
      position: static;
  }
</style>
