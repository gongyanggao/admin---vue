<template>
	<el-date-picker
      v-model="value"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      :picker-options="pickerOptions">
    </el-date-picker>
</template>

<script>
import DateTimePicker from './DateTimePicker.js'
export default DateTimePicker
</script>

<style lang='css'>
</style>
