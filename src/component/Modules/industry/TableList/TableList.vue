<template>
  <div>
    <Button class="mg-btm" type="primary" @click.prevent.native="isOpen = !isOpen">
      </Icon>表头配置&nbsp;<Icon :type="isOpen === true ? 'chevron-up' : 'chevron-down'"></Icon></Button>
    
    <div v-show="isOpen" class="open-box">
      <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</Checkbox>
        <Button type="primary" :loading="loading" icon="checkmark-round" @click="toLoading">
          <span v-html="loading === false ? '保存':'保存中...'"></span>
        </Button>
      </div>
      <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
        <Checkbox label="show">展示</Checkbox>
        <Checkbox label="weak">唤醒</Checkbox>
        <Checkbox label="signin">登录</Checkbox>
        <Checkbox label="click">点击</Checkbox>
        <Checkbox label="active">激活</Checkbox>
        <Checkbox label="day7">7日留存</Checkbox>
        <Checkbox label="day30">30日留存</Checkbox>
        <Checkbox label="tomorrow">次日留存</Checkbox>
        <Checkbox label="day">日活跃</Checkbox>
        <Checkbox label="week">周活跃</Checkbox>
        <Checkbox label="month">月活跃</Checkbox>
      </Checkbox-group>
    </div>
    
    <Table :data="tableData2" :columns="tableColoums" border></Table>
  </div>
</template>

<script>
import TableList from './TableList.js'
export default TableList
</script>

<style scoped lang='less'>
	.ivu-collapse {
    margin-bottom: 20px;
  }
  .open-box {
    border: 1px solid rgb(233, 233, 233);
    margin-bottom: 6px;
    background: #fff;
    padding: 15px;
  }
  .mg-btm {
    margin-bottom: 15px;
  }
</style>
