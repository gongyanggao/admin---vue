<template>
	<content>
		<el-row>
		  <el-col :span="24"><div class="grid-content bg-purple-dark">
		  	<el-table
		      :data="tableData3"
		      style="width: 100%;text-align: center" border>
		      <el-table-column
		        prop="total"
		        label="本省主体备案网站总数">
		      </el-table-column>
		      <el-table-column
		        prop="ips"
		        label="IP地址总数">
		      </el-table-column>

		      <el-table-column label="未备案网站总数">
			      <el-table-column
			        prop="sites"
			        label="">
			      </el-table-column>
			      <el-table-column
			        prop="compare"
			        label="趋势">
			      </el-table-column>
		      </el-table-column>

		      <el-table-column label="IDC自建机房总数">
			      <el-table-column
			        prop="idcs"
			        label="">
			      </el-table-column>
			      <el-table-column
			        prop="addr"
			        label="集中区域">
			      </el-table-column>
		      </el-table-column>

		    </el-table>
		  </div></el-col>
		</el-row>
		<el-row :gutter="20">
		  <el-col :span="13">
		  	<div class="nav-tabs-custom">
          <ul class="nav nav-tabs pull-right ui-sortable-handle">
            <li class="active">
              <a href="#world" data-toggle="tab">IP地址</a>
            </li>
            <li class="">
              <a href="#china" data-toggle="tab">网站</a>
            </li>
            <li class="">
              <a href="#hubei" data-toggle="tab">IDC机房</a>
            </li>
            <li class="pull-left header">
              <i class="fa fa-map-marker"></i>地市分布统计
            </li>
          </ul>
          <div class="tab-content no-padding">
            <div id="world" class="chart tab-pane active" style="position: relative; height: 600px;">
              <IEcharts :option="world" :loading="false" :resizable="true" style="height: 100%;width: 100%;"></IEcharts>
            </div>
            <div id="china" class="chart tab-pane" style="position: relative; height: 600px;">
              <IEcharts :option="china" :loading="false" :resizable="true" style="height: 100%;width: 100%;"></IEcharts>
            </div>
            <div id="hubei" class="chart tab-pane" style="position: relative; height: 600px;">
              <IEcharts :option="world" :loading="false" :resizable="true" style="height: 100%;width: 100%;"></IEcharts>
            </div>
		  		</div>
		  	</div>
  		</el-col>
		  <el-col :span="11">
		  	<div class="nav-tabs-custom">
          <ul class="nav nav-tabs pull-right ui-sortable-handle">
            <li class="active">
              <a href="#pie2" data-toggle="tab">前置审批</a>
            </li>
            <li class="">
              <a href="#pie1" data-toggle="tab">行业分布</a>
            </li>
            
            <li class="pull-left header">
              <i class="fa fa-pie-chart"></i>网站分类分布统计
            </li>
          </ul>
          <div class="tab-content no-padding">
            <div id="pie2" class="chart tab-pane active" style="position: relative; height: 200px;">
              <IEcharts :option="pieData1" :loading="false" :resizable="true" @ready="onReady" style="height: 100%;width: 100%;"></IEcharts>
            </div>
            <div id="pie1" class="chart tab-pane" style="position: relative; height: 200px;">
              <IEcharts :option="pieData2" :loading="false" :resizable="true" @ready="onReady" style="height: 100%;width: 100%;"></IEcharts>
            </div>
		  		</div>
		  	</div>

		  	<div class="nav-tabs-custom">
          <ul class="nav nav-tabs pull-right ui-sortable-handle">
            <li class="active">
              <a href="#globalRank" data-toggle="tab">全球</a>
            </li>
            <li>
              <a href="#hubeiLink" data-toggle="tab">本省接入</a>
            </li>
            <li>
              <a href="#hubeiProv" data-toggle="tab">本省主体</a>
            </li>
            <li class="pull-left header">
              <i class="fa fa-flag-checkered"></i>网站访问量排名
            </li>
          </ul>
          <div class="tab-content no-padding">
            <div id="hubeiProv" class="chart tab-pane active" style="position: relative; height: 330px;">
              <el-table :data="hubeiProv" height="300" style="width: 100%">
					      <el-table-column prop="domain" label="域名" width="230"></el-table-column>
					      <el-table-column prop="website" label="网站" ></el-table-column>
					      <el-table-column prop="summary" label="访问量"></el-table-column>
		            <el-table-column prop="trend" label="排名趋势" ></el-table-column>
					    </el-table>
					    <el-button class="more" type="text" @click="dialogVisible = true">更多>></el-button>
            </div>
            <div id="hubeiLink" class="chart tab-pane" style="position: relative; height: 330px;">
              <el-table :data="hubeiLink" height="300" style="width: 100%">
					      <el-table-column prop="domain" label="域名" width="230"></el-table-column>
					      <el-table-column prop="website" label="网站"></el-table-column>
					      <el-table-column prop="summary" label="访问量"></el-table-column>
		            <el-table-column prop="trend" label="排名趋势"></el-table-column>
					    </el-table>
					    <el-button class="more" type="text" @click="dialogVisible = true">更多>></el-button>
            </div>
            <div id="globalRank" class="chart tab-pane" style="position: relative; height: 330px;">
              <el-table :data="globalRank" height="300" style="width: 100%">
					      <el-table-column prop="domain" label="域名" width="230"></el-table-column>
					      <el-table-column prop="website" label="网站" ></el-table-column>
					      <el-table-column prop="summary" label="访问量" ></el-table-column>
		            <el-table-column prop="trend" label="排名趋势" ></el-table-column>
					    </el-table>
					    <el-button class="more" type="text" @click="dialogVisible = true">更多>></el-button>
            </div>
		  		</div>
		  	</div>
		  </el-col>
		</el-row>
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  size="tiny"
		  :before-close="handleClose">
		  <span>这是一段信息</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</content>
	
</template>

<script>
import IndustryManagement from './IndustryManagement.js'
export default IndustryManagement
</script>

<style scoped lang='less'>
	.more {
		float: right;
		margin-right: 30px;
	}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
