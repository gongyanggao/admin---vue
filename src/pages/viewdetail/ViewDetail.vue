<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-info">
            <div class="box-header">
              <h3 class="box-title">
                详情列表展示页面
              </h3>
            </div>
            <div class="box-body">
              <el-form :inline="true" :model="formInline" class="demo-form-inline source">
                <el-form-item label="名称">
                  <el-input v-model="formInline.user" placeholder="输入名称"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                  <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="西藏" value="xizang"></el-option>
                    <el-option label="云南" value="yunan"></el-option>
                    <el-option label="陕西" value="shanxi"></el-option>
                  </el-select>
                </el-form-item><el-form-item>
                  <div class="block">
                    <el-date-picker
                      v-model="formInline.date"
                      type="daterange"
                      align="right"
                      placeholder="选择日期范围"
                      :picker-options="pickerOptions2">
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="goBack">返回上一级</el-button>
                </el-form-item>
              </el-form>
              <el-table :data="arrs" border ref="multipleTable" style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="id" sortable width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" sortable width="180">
                </el-table-column>
                <el-table-column prop="city" label="城市">
                </el-table-column>
                <el-table-column prop="createdAt" label="日期">
                </el-table-column>
                <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag" filter-placement="bottom-end">
                  <template scope="scope">
                    <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="box-footer">
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="1"
                  :page-sizes="[10, 25, 50, 100]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="100">
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import ViewDetail from './ViewDetail.js'
  export default ViewDetail
</script>
<style scoped lang='less'>
  @import url(ViewDetail.less);
</style>