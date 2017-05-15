<template>
    <div class="wrapper">
    	<NaviBar></NaviBar>
      	<Slider></Slider>
      	
      	<div id="content-wrap" class="content-wrapper">
		    <c-breadcrumb></c-breadcrumb>
		    
	    	<router-view></router-view>
		    
		    <!-- /.content -->
		  </div>
    </div>
</template>
<script>
    import NaviBar from './NaviBar.vue'
	import Slider from './Slider.vue'
	import CBreadcrumb from '../components/Breadcrumb'
    export default {
        name: 'home',
        components: {
		    CBreadcrumb, NaviBar, Slider
	    }
    }
</script>
<style scoped lang='less'>
    
</style>
