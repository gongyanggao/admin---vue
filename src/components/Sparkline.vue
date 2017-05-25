<template>
  <div style="line-height: 50px;text-align:center;">
  </div>
</template>
<script>
  import '../../node_modules/jquery-sparkline/jquery.sparkline'
  export default {
    data() {
      return {
        
      }
    },
    props:{
      data:{
        type:Array
      },
      params:{
        type:Object
      }
    },
    mounted() {
      $(this.$el).sparkline(this.data,this.params)
    }
  }
</script>
<style scoped>
  
</style>