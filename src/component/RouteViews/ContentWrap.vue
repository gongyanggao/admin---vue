<template>
    <transition name="page" mode="out-in">
    	<section class="content">
    		<router-view></router-view>
    	</section>
    </transition>  
  <!-- /.content-wrapper -->
</template>

<script>

export default {
    name: 'content-wrap',
	data() {
		return {
			
		}
	}
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
