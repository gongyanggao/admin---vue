<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
  	return {
  		
  	}
  },
  watch:{
    $route(to,from){
      // console.log(to);
      if (!to.matched.length) {
        this.$router.push('/404');
      }
    }
	}
}
</script>

<style>

</style>
