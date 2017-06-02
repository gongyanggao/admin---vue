export default {
  name: 'message',
  methods: {
    open1() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示'
      });
    },

    open2() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },

    open3() {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      });
    },

    open4() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error'
      });
    }
  }
}