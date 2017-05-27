<template>
    <div class="wrapper">
    	<NaviBar></NaviBar>
    	<Slider></Slider>
      	
    	<div id="content-wrap" class="content-wrapper" :style="{'min-height': mHeight}">
		    <c-breadcrumb></c-breadcrumb>
		    
	    	<router-view></router-view>
		    
		    <!-- /.content -->
		  </div>
    </div>
</template>
<script>
    import NaviBar from './NaviBar.vue'
	import Slider from './Slider.vue'
	import Common from '../Common/'
    export default {
        name: 'home',
        computed: {
            mHeight: ()=>{
                return $(window).height() - 50
            }
        },
        components: {
		    CBreadcrumb: Common.CBreadcrumb, NaviBar, Slider
	    }
    }
</script>
<style scoped lang='less'>
    .wrapper{
        position: relative;
    }
</style>
