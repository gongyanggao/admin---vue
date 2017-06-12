<template>
    <transition name="page" mode="out-in">
    	<section class="content">
    		<router-view></router-view>
			  <el-dialog :close-on-click-modal="false" title="shouhuo" :visible.sync="dialog0">
			    <el-table :data="gridData0">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="大名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog :close-on-click-modal="false" title="版本信息" :visible.sync="dialog1">
			    <el-table :data="gridData1">
			      <el-table-column property="pid" label="版本号" width="200"></el-table-column>
			      <el-table-column property="node" label="系统节点" width="150"></el-table-column>
			      <el-table-column property="date" label="上次升级时间"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog :close-on-click-modal="false" title="短信息" :visible.sync="dialog2">
			    <el-table :data="messageData" :max-height="350">
			      <el-table-column property="messageType" label="消息类型" width="150"></el-table-column>
			      <el-table-column property="serviceType" label="业务类别" width="150"></el-table-column>
			      <el-table-column property="messageHeader" label="消息标题" width="250"></el-table-column>
            <el-table-column property="createdAt" label="消息创建时间" width="150"></el-table-column>
			    </el-table>
          <el-pagination
            @size-change="messageSizeChange"
            @current-change="messageNumberChange"
            :current-page="messageDataNumber"
            :page-sizes="[10, 25, 50, 100]"
            :page-size="messageDataSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100">
          </el-pagination>
			  </el-dialog>
			  <el-dialog :close-on-click-modal="false" title="修改密码" :visible.sync="dialog3">
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
				    <el-button @click="dialog3=false">取 消</el-button>
				    <el-button type="primary" @click="submitForm3('form3')">确 定</el-button>
				  </div>
				</el-dialog>
			  <el-dialog :close-on-click-modal="false" title="shouhuo" :visible.sync="dialog4">
			    <el-table :data="gridData4">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="大名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog :close-on-click-modal="false" title="IP和备案信息" :visible.sync="dialog5">
          <el-tabs type="border-card">
            <el-tab-pane label="DNS查询">
              <el-form :inline="true" :model="formSite" class="demo-form-inline">
                <el-form-item label="网站">
                  <el-input v-model="formSite.text" placeholder="请输入网站名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="searchSite(formSite)">查询</el-button>
                </el-form-item>
              </el-form>
              <el-dropdown @command="exportSites">
                <el-button type="primary">
                  导出<i class="el-icon-caret-bottom el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="当前页">导出当前页</el-dropdown-item>
                  <el-dropdown-item command="全部">导出全部</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              
            </el-tab-pane>
            <el-tab-pane label="IP归属地信息">
              <el-form :inline="true" :model="formIP" class="demo-form-inline">
                <el-form-item label="IP地址">
                  <el-input v-model="formIP.text" placeholder="请输入IP地址"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="searchIP(formIP)">查询</el-button>
                </el-form-item>
              </el-form>
              <el-table
                :data="gridDataIP"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="网站信息">
              <el-form :inline="true" :model="formDomain" class="demo-form-inline">
                <el-form-item label="顶级域名">
                  <el-input v-model="formDomain.text" placeholder="请输入顶级域名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="searchDomain(formDomain)">查询</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="searchDomains(formDomain)">批量查询</el-button>
                </el-form-item>
              </el-form>
              <el-dropdown @command="exportDomain" style="margin-bottom: 20px;">
                <el-button type="primary">
                  导出<i class="el-icon-caret-bottom el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="当前页">导出当前页</el-dropdown-item>
                  <el-dropdown-item command="全部">导出全部</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-table :data="siteIPData" :max-height="250" ref="multipleTable" style="width: 100%">
                <el-table-column prop="domain" align="center" label="顶级域名" sortable width="150">
                </el-table-column>
                <el-table-column prop="status" align="center" label="备案状态" sortable width="120">
                </el-table-column>
                <el-table-column prop="siteName" align="center" label="网站名称" width="110">
                </el-table-column>
                <el-table-column prop="siteRecord" align="center" label="网站备案号" width="180">
                </el-table-column>
                <el-table-column prop="ip" align="center" label="接入IP" sortable width="150">
                </el-table-column>
                <el-table-column prop="company" align="center" label="接入商" sortable width="100">
                </el-table-column>
                <el-table-column prop="domainCompany" align="center" label="域名注册商" width="110">
                </el-table-column>
                <el-table-column prop="isOpennable" align="center" label="是否可以打开" width="140" :filters="[{ text: '是', value: true }, { text: '否', value: false }]" :filter-method="filterTag" filter-placement="bottom-end">
                  <template scope="scope">
                    <el-tag :type="scope.row.isOpennable === true ? 'primary' : 'warning'" close-transition>{{scope.row.isOpennable | toCHN}}</el-tag>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                @size-change="siteIPDataSizeChange"
                @current-change="siteIPDataNumberChange"
                :current-page="siteIPDataNumber"
                :page-sizes="[10, 25, 50, 100]"
                :page-size="siteIPDataSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="100">
              </el-pagination>
            </el-tab-pane>
          </el-tabs>
			  </el-dialog>
			  <el-dialog :close-on-click-modal="false" title="站内消息发送" :visible.sync="dialog6">
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
				    <el-button @click="dialog6=false">取 消</el-button>
				    <el-button type="primary" @click="submitForm6('form6')">确 定</el-button>
				  </div>
			  </el-dialog>
			  <el-dialog :close-on-click-modal="false" size="tiny" title="手机客户端下载" :visible.sync="dialog7">
			    <el-card class="box-card" style="text-align: center;">
            <div class="text item">
              一，直接下载<a href="#">安卓客户端</a>
            </div> 
            <div class="text item">
              二，手机浏览器扫描二维码下载
            </div>
            <img src="../../../static/img/erweima.png" class="image">
          </el-card>
			  </el-dialog>
    	</section>
    </transition>  
  <!-- /.content-wrapper -->
</template>

<script>
import { getSiteIP, getMessage } from '../../service/'
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
      gridDataIP: [{
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      formSite: {
        text: ''
      },
      formIP: {
        text: ''
      },
      formDomain: {
        text: ''
      },
      form6: {
        textarea1: '',
        textarea2: ''
      },
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
      formLabelWidth: '120px',
      siteIPData: [],
      messageData: [],
      siteIPDataSize: 10,
      siteIPDataNumber: 1,
      messageDataSize: 10,
      messageDataNumber: 1,
		}
	},
	computed: mapState({
    dialogIndex: state => state.dialog.dialogIndex
  }),
  filters: {
    toCHN: value => {
      if(value) {
        return '是'
      } else {
        return '否'
      }
    }
  },
  created () {
    getSiteIP(520).then((res) => {
      this.siteIPData = res.data.data.array
    }).catch((err) => {
      console.log(err)
    })
    getMessage(1314).then((res) => {
      this.messageData = res.data.data.array
    }).catch((err) => {
      console.log(err)
    })
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
    },
    searchSite(form) { this.$message('查询' + form.text) },
    searchIP(form) { this.$message('查询' + form.text) },
    searchDomain(form) { this.$message('查询' + form.text) },
    searchDomains(form) { this.$message('批量查询' + form.text) },
    exportSites(command) { this.$message('选择导出' + command) },
    exportDomain(command) { this.$message('选择导出' + command) },
    filterTag(value, row) { return row.isOpennable === value },
    siteIPDataSizeChange(val) {
        this.siteIPDataSize = val
        this.$message('切换每页显示条数：' + val + '条')
      },
    siteIPDataNumberChange(val) {
      this.siteIPDataNumber = val
      this.$message('切换至第：' + val + '页')
    },
    messageSizeChange(val) {
        this.messageDataSize = val
        this.$message('切换每页显示条数：' + val + '条')
      },
    messageNumberChange(val) {
      this.messageDataNumber = val
      this.$message('切换至第：' + val + '页')
    },
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
        default:
          
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
.image{
  width: 250px;
  margin: 10px 0;
}
.box-card .item{
  padding: 10px 0;
}
</style>
