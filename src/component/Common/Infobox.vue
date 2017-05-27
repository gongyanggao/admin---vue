<template>
    <div class="info-box col-md-3" :class="infoList.color">
      <div class="info-box-content">
        <span class="info-box-text">{{infoList.text}}</span>
        <span class="info-box-number">{{infoList.number}}</span>
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
