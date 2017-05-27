


<template>
  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="info-box" v-bind:class='sparkBox.class'>
      <span class="info-box-icon"><i class="fa">
        <slot></slot>
      </i></span>
      <div class="info-box-content">
        <span class="info-box-text">{{sparkBox.comments}}</span>
        <span class="info-box-number">{{sparkBox.number}}</span>

        <div class="progress">
          <div class="progress-bar" style="width: 100%"></div>
        </div>
            <span class="progress-description" :title="sparkBox.description">
              {{sparkBox.description}}
            </span>
      </div>
      <!-- /.info-box-content -->
    </div>
    <!-- /.info-box -->
  </div>
</template>
<script>
export default {
  name: 'sparkline-box',
  props: ['sparkBox'],
  components: {
    
  }
}
</script>
<style scoped>
  
</style>