<template>
  <div class="department-container">
    <div class="app-container">
      <el-card>
        <tree :tree="company" :is-root="true" />

        <el-tree :data="dedata" :props="deprops" default-expand-all="">
          <Tree slot-scope="{data}" :tree="data" />
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import Tree from './components/tree.vue'
export default {
  components: {
    Tree
  },
  data() {
    return {
      deprops: {
        lable: 'name'
      },
      dedata: [{ name: 'zcb', manager: 'zs', childern: [{ name: 'scv' }] }, { name: '还是', manager: '外部·' }],
      company: {
        name: 'xx公司', manager: '负责人'
      }
    }
  }
}
</script>

<style scoped>

</style>
