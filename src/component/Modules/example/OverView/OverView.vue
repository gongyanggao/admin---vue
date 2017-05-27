<template>
  <!-- Content Header (Page header) -->
  <section class="content">
    <div class="row">
      <div class="col-md-8">

        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs pull-right ui-sortable-handle">
            <li class="active">
              <a @click="isWorld = true" href="" data-toggle="tab">境外</a>
            </li>
            <li class="">
              <a @click="isWorld = false" href="" data-toggle="tab">境内</a>
            </li>
            <li class="pull-left header">
              <i class="fa fa-map-marker"></i>诈骗网站地域分布
            </li>
          </ul>
          <div class="tab-content no-padding">
            <div v-if="isWorld" class="chart tab-pane active" style="position: relative; height: 300px;">
              <IEcharts :option="world" :loading="false" :resizable="true" style="height: 100%;width: 100%;"></IEcharts>
            </div>
            <div v-if="!isWorld" class="chart tab-pane active" style="position: relative; height: 300px;">
              <IEcharts :option="china" :loading="false" :resizable="true" style="height: 100%;width: 100%;"></IEcharts>
            </div>

            <div class="row">
              <c-infobox v-for="item in infoLst" :info-list="item"></c-infobox>
            </div>
          </div>

        </div>

        <c-collapse :coll-option="collapse2">
          <c-carousel :caro-option="carousel"></c-carousel>
        </c-collapse>
      </div>
      <div class="col-md-4">
        <c-collapse :coll-option="collapse3">
          <div style="height: 180px">
            <IEcharts :option="pie" :loading="false" :resizable="true" @ready="onReady" @click="pieClick" style="height: 100%;width: 100%;"></IEcharts>
          </div>
        </c-collapse>
        <c-smallbox v-for="item in summary" :info-summary="item"></c-smallbox>
        
      </div>
    </div>
  </section>
</template>

<script>
import OverView from './OverView.js'
export default OverView
</script>

<style lang='css'>
</style>
