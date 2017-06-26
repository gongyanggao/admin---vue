/**
 * 面包屑组件
 */

<template>
    <ol class="breadcrumb">
      <li v-for='(item,index) in $route.matched' v-if='item.path !== ""' :class='{active: (index + 1) === $route.matched.length}'><a v-bind:href='(index + 1) === $route.matched.length ? "#" : item.path'  >{{item.name}}</a></li>
      
    </ol>
</template>

<script>

export default {
	name: 'c-breadcrumb',
	data() {
		return {
			
		}
	},
	created() {
		console.log(this.$route.matched)
	}
}
</script>

<style lang='css' scoped>
.breadcrumb{
  margin-bottom: 20px;
}

.breadcrumb>.active a{
    color: #777;
    cursor: text;
}
</style>
