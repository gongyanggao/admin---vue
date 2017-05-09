/**
 * 面包屑组件
 */

<template>
    <ol class="breadcrumb">
      <li v-for="item in items.arr"><a href="#"">{{item.label}}</a></li>
      <li class="active">{{items.currentLabel}}</li>
    </ol>
</template>

<script>

export default {
	name: 'c-breadcrumb',
  props: {
    items: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang='css'>

</style>
