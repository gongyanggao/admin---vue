<template>
    <div class="wrapper">
    	<navi-bar></navi-bar>
    	<slider></slider>
      	
    	<div id="content-wrap" ref="wrapper" class="content-wrapper" >
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
            // mHeight: ()=>{
            //     return $(window).height() - 50
            // }
        },
        mounted() {
            // this.$refs.wrapper.style.minHeight = $(window).height() - 50

        },
        components: {
		    CBreadcrumb: Common.CBreadcrumb, NaviBar, Slider
	    }
    }
</script>
<style scoped lang='less'>
    .wrapper{
        position: static;
    }
</style>
