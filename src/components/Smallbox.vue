<template>
  <!-- Info boxes -->
  <div class="">
    <div v-for="item in infoSummary" class="small-box" v-bind:class="item.class">
      <div class="inner">
        <p>{{item.tittle}}</p>
        <h3>{{item.summary}}</h3>
      </div>
      <a href="#" class="small-box-footer">查看详细
        <i class="fa fa-arrow-circle-right"></i>
      </a>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'c-smallbox',
  props: {
    infoSummary: {
      type: Array,
      require: true
    }
  },
  created () {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.small-box h3, .small-box p {
    margin: 0;
}
.small-box>.inner {
    text-align: center;
}

</style>