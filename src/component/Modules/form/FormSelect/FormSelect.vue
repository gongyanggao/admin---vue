<template>
	<el-select v-model="value5" multiple placeholder="请选择">
	    <el-option
	      v-for="item in options"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	    </el-option>
  	</el-select>
    
</template>

<script>
import FormSelect from './FormSelect.js'
export default FormSelect
</script>

<style lang='css'>
</style>
