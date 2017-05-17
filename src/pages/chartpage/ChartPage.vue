<template>
  <div>
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <c-collapse :coll-option="collapse3">
              <div class="" style="height: 400px">
                <IEcharts :option="bar" :loading="false" :resizable="true" style="height: 100%;width: 100%;"></IEcharts>
              </div>
            </c-collapse>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import ChartPage from './ChartPage.js'
export default ChartPage
</script>

<style lang='css'>
</style>
