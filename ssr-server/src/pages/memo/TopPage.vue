<template>
  <el-container>
    <el-aside width="40%">
      <el-table
        :data="tableData"
        style="width: 100%"
        @row-click="selectData"
      >
        <el-table-column
          prop="date"
          label="Date"
          width="100"
        />
        <el-table-column
          prop="name"
          label="Name"
          width="100"
        />
        <el-table-column
          prop="address"
          label="Address"
        />
      </el-table>
    </el-aside>
    <el-main>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>{{ selectedData.name }}</span>
            <el-button
              class="button"
              type="text"
            >
              Operation button
            </el-button>
          </div>
        </template>
        {{ selectedData }}
      </el-card>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const selectData= (data)=>{
  selectedData.date = data.date
  selectedData.name = data.name
  selectedData.address = data.address
}

const selectedData = reactive({
  date: '2016-05-03',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
})

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>