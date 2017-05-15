<template>

  <div class="table-responsive">
    <table class="table no-margin">
      <thead>
        <tr>
          <th>诈骗类型</th>
          <th>网站地址</th>
          <th>日期</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tr in caroList">
          <td>{{tr.type}}</td>
          <td>{{tr.addr}}</td>
          <td>{{tr.date}}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: 'va-carousel',
  props: {
    caroList: {
      type: Array,
      require: true
    }
  },
  created () {

  },
  methods:
}
</script>
