<template>
  <div class="box" v-bind:class="collOption.class">
    <div class="box-header with-border">
      <h3 class="box-title">{{collOption.tittle}}</h3>
      <div v-if="collOption.expand" class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div>
    <div class="box-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>

export default {
  name: 'c-collapse',
  props: {
    collOption: {
      type: Object,
      require: true
    }
  }
}
</script>
<style lang="css">
</style>
