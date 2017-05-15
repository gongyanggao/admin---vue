/**
 * 面包屑组件
 */

<template>
    <ol class="breadcrumb">
      <li class=""><a href="/">首页</a></li>
      <li v-for='(item,index) in $route.matched' v-if='item.path !== ""' :class='{active: (index + 1) === len}'><a v-bind:href='(index + 1) === len ? "#" : item.path'  >{{item.name}}</a></li>
      
    </ol>
</template>

<script>

export default {
	name: 'c-breadcrumb',
	data() {
		return {
			len: []
		}
	},
	created() {
		this.len = this.$route.matched.length
		console.log(this.len)
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
