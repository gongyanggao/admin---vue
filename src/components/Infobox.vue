<template>
  <div class="row">
    <div v-for="item in infoList" class="info-box col-md-3" v-bind:class="item.color">
      <div class="info-box-content">
        <span class="info-box-text">{{item.text}}</span>
        <span class="info-box-number">{{item.number}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-infobox',
  props: ['infoList']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info-box-content {
  margin-left: 0!important; 
}
.info-box {
  min-height: 55px!important; 
  text-align: center;
  margin: 5px 5px 10px 15px;
  width: initial;
}
.row{
  margin-bottom: 20px;
}
</style>
