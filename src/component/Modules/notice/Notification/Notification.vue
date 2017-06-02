<template>
	<div>
		<el-button
	    plain
	    @click="open1">
	    成功
	  </el-button>
	  <el-button
	    plain
	    @click="open2">
	    警告
	  </el-button>
	  <el-button
	    plain
	    @click="open3">
	    消息
	  </el-button>
	  <el-button
	    plain
	    @click="open4">
	    错误
	  </el-button>
	</div>
</template>

<script>
import Notification from './Notification.js'
export default Notification
</script>

<style lang='css'>
</style>
