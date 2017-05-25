<template>
  <!-- Info boxes -->
    <div class="small-box" v-bind:class="infoSummary.class">
      <div class="inner">
        <p>{{infoSummary.tittle}}</p>
        <h3>{{infoSummary.number}}</h3>
      </div>
      <a @click='detail(infoSummary)' class="small-box-footer">查看详细
        <i class="fa fa-arrow-circle-right"></i>
      </a>
    </div>
  
</template>

<script>
export default {
  name: 'c-smallbox',
  props: {
    infoSummary: {
      type: Object,
      require: true
    }
  },
  created () {

  },
  methods: {
    detail(data) {
      
      this.$router.push('/home/content/viewdetail/' + data.id);
    }
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