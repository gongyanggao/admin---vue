<template>
  <!-- 走马灯 -->
  <div class="" style="height: 237px;overflow: hidden;">
    <table class="table">
      <thead>
        <tr class="row">
          <th v-for="th in caroOption.arrHead" v-bind:class="th.class">{{th.tittle}}</th>
        </tr>
      </thead>
    </table>
    <ul id="moving" style="list-style: none;">
      <li class="row" v-for="tr in caroOption.arrData">
        <div class="col-md-3">{{tr.type}}</div>
        <div class="col-md-5">{{tr.addr}}</div>
        <div class="col-md-4">{{tr.date}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'va-carousel',
  props: {
    caroOption: {
      type: Object,
      require: true
    }
  },
  created () {

  },
  mounted() {
    var ul = document.getElementById('moving');
    var li = ul.getElementsByTagName('li');
    this.move(ul, li);
    for (var i = 0; i < li.length; i++) {
        li[i].title = li[i].children[0].innerText + '  ' +  li[i].children[1].innerText + '  ' +  li[i].children[2].innerText;
    }
  },
  methods: {
    move(obj, elaArr) {
      var num = 0;
      var eleH = 0;
      clearInterval(obj.timer);
      obj.timer = setInterval(run, 70)
      obj.onmouseover = function() {
          clearInterval(obj.timer);
      }
      obj.onmouseout = function() {
          obj.timer=setInterval(run, 70)
      }

      function run() {
          obj.style.marginTop = -num + 'px';
          eleH = getStyle(elaArr[0], 'height');
          num++;
          if (parseInt(obj.style.marginTop) == -parseInt(eleH)) {
              obj.style.marginTop = 0;
              num = 0;
              obj.appendChild(elaArr[0]);
          }
      }

      function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
      }
    },
    
  }
}
</script>
<style scoped>
table{
  
}
th{
  text-align: center;
}
ul{
  padding-left: 0;
}
li div{
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>