<template>
    <transition name="page" mode="out-in">
    	<section class="content">
    		<router-view></router-view>
    		<el-dialog title="收货地址" :visible.sync="dialog0">
			    <el-table :data="gridData1">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="姓名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="shouhuo" :visible.sync="dialog1">
			    <el-table :data="gridData2">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="大名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="收货地址" :visible.sync="dialog2">
			    <el-table :data="gridData2">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="姓名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="shouhuo" :visible.sync="dialog3">
			    <el-table :data="gridData3">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="大名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="收货地址" :visible.sync="dialog4">
			    <el-table :data="gridData4">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="姓名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="shouhuo" :visible.sync="dialog5">
			    <el-table :data="gridData5">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="大名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="收货地址" :visible.sync="dialog6">
			    <el-table :data="gridData6">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="姓名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="shouhuo" :visible.sync="dialog7">
			    <el-table :data="gridData7">
			      <el-table-column property="date" label="日期" width="150"></el-table-column>
			      <el-table-column property="name" label="大名" width="200"></el-table-column>
			      <el-table-column property="address" label="地址"></el-table-column>
			    </el-table>
			  </el-dialog>
			  <el-dialog title="shouhuo" :visible.sync="dialog8">
			    <el-table :data="gridData8">
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
      gridData1: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData2: [{
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData2: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData3: [{
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData4: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData5: [{
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData6: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData7: [{
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData8: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialog0: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false,
      dialog8: false
		}
	},
	computed: mapState({
    dialogIndex: state => state.dialog.dialogIndex
  }),
  created () {
    
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
    		case 8:
	  			this.dialog8 = true
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
