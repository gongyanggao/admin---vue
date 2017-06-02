<template>
	<div>
		<el-button :plain="true" @click="open1">消息</el-button>
		<el-button :plain="true" @click="open2">成功</el-button>
		<el-button :plain="true" @click="open3">警告</el-button>
		<el-button :plain="true" @click="open4">错误</el-button>
	</div>
</template>

<script>
import Message from './Message.js'
export default Message
</script>

<style lang='css'>
</style>
