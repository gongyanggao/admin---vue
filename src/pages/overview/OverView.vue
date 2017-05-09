<template>
  <div>
    <!-- Content Header (Page header) -->
    
      <c-breadcrumb v-bind:items="breadcrumb"></c-breadcrumb>
    

    <section class="content">
      <div class="row">overview</div>
    </section>
  </div>
</template>

<script>
import CBreadcrumb from '../../components/Breadcrumb'
export default {
  name: 'over-view',
  data () {
    return {
      breadcrumb: {
        arr: [{
          label: '后台管理系统',
          path: ''
        }],
        currentLabel: '总览页面'
      }
    }
  },
  components: {
    CBreadcrumb
  }
}
</script>

<style lang='css'>
</style>
