<template>
  <div>
    <!-- Content Header (Page header) -->
      <c-breadcrumb :items="breadcrumb"></c-breadcrumb>

    <section class="content">
      <div class="row">listdetail</div>
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
        }, {
          label: '列表页面',
          path: '/listdetail'
       }],
        currentLabel: '列表详情页面'
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
