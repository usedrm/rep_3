<template>
  <el-row type="flex" justify="space-between" align="middle" style="height: 40px; width: 100%;">
    <el-col>
      <span>{{ tree.name }}</span>
    </el-col>
    <el-col :span="4">
      <el-row type="flex" justify="end">
        <el-col>{{ tree.manager }}</el-col>
        <el-col>
          <el-dropdown>
            <span>操作<i class="el-icon-arrow-down" /></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>添加子部门</el-dropdown-item>
              <el-dropdown-item v-if="! isRoot">编辑部门</el-dropdown-item>
              <el-dropdown-item v-if="! isRoot">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: 'Tree',
  props: {
    tree: {
      type: Object,
      required: true
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
