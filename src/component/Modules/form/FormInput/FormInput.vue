<template>
    <section class="content">
        <el-input
		  placeholder="请输入搜索条件"
		  icon="search"
		  v-model="input2"
		  :on-icon-click="handleIconClick">
		</el-input>
    </section>
</template>

<script>
import Input from './FormInput.js'
export default Input
</script>

<style lang='css'>
</style>
