<template>
  <create-sections title="成员完成情况">
    <el-table
      :data="list"
      :cell-style="cellStyle"
      class="table"
      height="500"
      stripe
      border
      highlight-current-row
      style="width: 100%">
      <el-table-column
        v-for="(item, index) in fieldList"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        show-overflow-tooltip/>
    </el-table>
  </create-sections>
</template>
<script type="text/javascript">
import CreateSections from '@/components/CreateSections'

export default {
  name: 'StatisticalMember', // 成员完成情况

  components: {
    CreateSections
  },

  props: {
    list: Array
  },

  data() {
    return {
      fieldList: [
        {
          prop: 'realname',
          label: '姓名'
        },
        {
          prop: 'allCount',
          label: '任务总数'
        },
        {
          prop: 'complete',
          label: '已完成数'
        },
        {
          prop: 'unfinished',
          label: '未完成数'
        },
        {
          prop: 'overdue',
          label: '逾期数'
        },
        {
          prop: 'completionRate',
          label: '完成率'
        }
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {

    /**
     * 表单元可点击样式
     */
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (column.property === 'overtimeCount' && row.overtimeCount) {
        return { color: '#FF5D60' }
      } else if (column.property === 'completionRate' && row.completionRate) {
        return { color: '#19DBC1' }
      } else {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.barmain {
  height: 150px;
}

.table {
  margin-top: 5px;
  margin-bottom: 20px;
}

.el-table /deep/ thead th {
  background-color: #f5f5f5;
}
</style>
