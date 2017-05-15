<template>
  <div>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>  
  </div>
  
  <!-- /.content-wrapper -->
</template>

<script>

export default {
  name: 'content-wrap'
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
