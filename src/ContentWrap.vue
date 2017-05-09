<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" class="content-wrapper">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'content-wrap',
  data() {
    return {

    }
  },
  created () {

  }
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
