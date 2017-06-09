<template>
    <transition name="page" mode="out-in">
    	<section class="content">
    		<router-view></router-view>
			  <el-dialog title="shouhuo" :visible.sync="dialog0">
			    <el-table :data="gridData0">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="大名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="版本信息" :visible.sync="dialog1">
			    <el-table :data="gridData1">
			      <el-table-column property="pid" label="版本号" width="200"></el-table-column>
			      <el-table-column property="node" label="系统节点" width="150"></el-table-column>
			      <el-table-column property="date" label="上次升级时间"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="shouhuo" :visible.sync="dialog2">
			    <el-table :data="gridData2">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="大名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="修改密码" :visible.sync="dialog3">
				  <el-form :model="form3" :rules="rules3" ref="form3">
				    <el-form-item label="旧密码" :label-width="formLabelWidth" prop="old">
				      <el-input type="password" v-model="form3.old" auto-complete="off"></el-input>
				    </el-form-item>
				    <el-form-item label="新密码" :label-width="formLabelWidth" prop="new">
				      <el-input type="password" v-model="form3.new" auto-complete="off"></el-input>
				    </el-form-item>
				    <el-form-item label="活动区域" :label-width="formLabelWidth" prop="region">
				      <el-select v-model="form3.region" placeholder="请选择活动区域">
				        <el-option label="区域一" value="shanghai"></el-option>
				        <el-option label="区域二" value="beijing"></el-option>
				      </el-select>
				    </el-form-item>
				  </el-form>
				  <div slot="footer" class="dialog-footer">
				    <el-button @click="dialog3 = false">取 消</el-button>
				    <el-button type="primary" @click="submitForm3('form3')">确 定</el-button>
				  </div>
				</el-dialog>
			  <el-dialog title="shouhuo" :visible.sync="dialog4">
			    <el-table :data="gridData4">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="大名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="IP和备案信息" :visible.sync="dialog5">
			    <el-table :data="gridData5">
			      <el-table-column property="ip" label="IP" width="200"></el-table-column>
			      <el-table-column property="fileNo" label="备案号" width="150"></el-table-column>
			      <el-table-column property="date" label="备案时间"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="站内消息发送" :visible.sync="dialog6">
			    <el-form :model="form6" :rules="rules6" ref="form6">
			    	<el-form-item label="标题" :label-width="formLabelWidth" prop="textarea1">
				      <el-input
							  type="text"
							  placeholder="请输入标题"
							  v-model="form6.textarea1">
							</el-input>
				    </el-form-item>
						<div style="margin: 20px 0;"></div>
						<el-form-item label="内容" :label-width="formLabelWidth" prop="textarea2">
							<el-input
							  type="textarea"
							  :autosize="{ minRows: 2, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="form6.textarea2">
							</el-input>
						</el-form-item>
				  </el-form>
				  <div slot="footer" class="dialog-footer">
				    <el-button @click="dialog6 = false">取 消</el-button>
				    <el-button type="primary" @click="submitForm6('form6')">确 定</el-button>
				  </div>
			  </el-dialog>
			  <el-dialog title="shouhuo" :visible.sync="dialog7">
			    <el-table :data="gridData7">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="大名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
    	</section>
    </transition>  
  <!-- /.content-wrapper -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'content-wrap',
  data() {
    return {
      gridData0: [{
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData1: [{
        pid: 'auCpkj7Rtt5jMk2OybN&3#',
        node: 'complete',
        date: '2016-05-02'
      }],
      gridData2: [{
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      form3: {
        old: '',
        new: '',
        region: ''
      },

      gridData4: [{
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData5: [{
        ip: '192.168.53.128',
        fileNo: 'act-web/vue-spa',
        date: '2017-05-01'
      }],
      form6: {
        textarea1: '',
        textarea2: ''
      },
      gridData7: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      rules3: {
        old: [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        new: [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      },
      rules6: {
        textarea1: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        textarea2: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ]
      },
      dialog0: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false,
      formLabelWidth: '120px'
		}
	},
	computed: mapState({
    dialogIndex: state => state.dialog.dialogIndex
  }),
  created () {
    
  },
  methods: {
    submitForm3(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form3)
          this.dialog3 = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    submitForm6(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form6)
          this.dialog6 = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  watch: {
    dialogIndex(val) {
    	switch(val){
	  		case 0:
	  			this.dialog0 = true
	    		break
    		case 1:
	  			this.dialog1 = true
	    		break
    		case 2:
	    		this.dialog2 = true
	    		break
	  		case 3:
	  			this.dialog3 = true
	    		break
    		case 4:
	    		this.dialog4 = true
	    		break
	  		case 5:
	  			this.dialog5 = true
	    		break
    		case 6:
	    		this.dialog6 = true
	    		break
	  		case 7:
	  			this.dialog7 = true
	    		break
    	}
    }
  }
}
</script>

<style scoped>
.page-enter-active, .page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
