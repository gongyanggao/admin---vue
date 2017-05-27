<template>
		<div class="login-box">
			<div class="login-logo">
				反诈登录
			</div>
			<div class="login-box-body">
				<p class="login-box-msg">请验证用户名和密码</p>

				<el-form :label-position="labelPosition" :rules="rules" ref='ruleForm' label-width="80px" :model='ruleForm'>
				  <el-form-item label="用户名" prop="name">
				    <el-input v-model="ruleForm.name" icon="edit"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="password">
				    <el-input v-model="ruleForm.password" type="password" icon="edit"></el-input>
				  </el-form-item>
				  
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				    <el-button @click="resetForm('ruleForm')">重置</el-button>
				  </el-form-item>
				</el-form>

			</div>
		</div>
</template>

<script>
import Login from './Login.js'
export default Login
</script>

<style scoped lang='less'>
  @import url(Login.less);
</style>