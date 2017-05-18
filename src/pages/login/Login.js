// import
export default {
	name: 'Login',
	data() {
		return {
			labelPosition: 'right',
			ruleForm: {
				name: '',
				password: ''
			},
			rules: {
				name: [{
					required: true,
					message: '请输入登录名',
					trigger: 'blur'
				}, {
					min: 3,
					max: 10,
					message: '长度在 3 到 10 个字符',
					trigger: 'blur'
				}],
				password: [{
					required: true,
					message: '请输入密码',
					trigger: 'blur'
				}, {
					min: 6,
					max: 10,
					message: '长度在 6 到 10 个字符',
					trigger: 'blur'
				}]
			}
		}
	},
	created() {
		console.log('login!!!')
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$store.dispatch('set_user', this.ruleForm.name)
					this.$router.push('/home')
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
}