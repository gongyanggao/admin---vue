<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <c-collapse :coll-option="collapse3">
          <div class="" style="height: 400px">
            <IEcharts :option="bar" :loading="false" :resizable="true" style="height: 100%;width: 100%;"></IEcharts>
          </div>
          <button class="btn btn-info" @click="refreshChart()">改变数据</button>
        </c-collapse>
      </div>
    </div>

    <div class="row">
      <sparkline-box v-for="item in sparkBoxes" :spark-box="item">
        <spark-line :params="{type: item.type,height:60,width:60}" :data='item.data'></spark-line>
      </sparkline-box>
    </div>

    <bootstrap-modal ref="theModal" :needFooter="false">
      <div slot="title">
          模态框表单
      </div>
      <Forms slot="body" ref="forms"></Forms>
      <!-- <div slot="footer">
          
      </div> -->
    </bootstrap-modal>
    <button class="btn btn-info" @click="openTheModal()">创建表单</button>
  </div>
</template>

<script>
import ChartPage from './ChartPage.js'
export default ChartPage
</script>

<style scoped>
  .el-form-item{
    margin-bottom: 15px;
  }
  .el-form{
    padding: 15px;
    width: 95%;
  }
</style>
