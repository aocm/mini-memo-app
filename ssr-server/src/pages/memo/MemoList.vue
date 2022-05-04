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
          width="120"
        />
        <el-table-column
          prop="name"
          label="Name"
          width="120"
        />
        <el-table-column
          prop="title"
          label="Title"
        />
      </el-table>
    </el-aside>
    <el-main class="view-container">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>{{ selectedData.name }}</span>
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
  selectedData.title = data.title
}

const selectedData = reactive({
  name: 'Not selected',
})

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    title: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    title: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    title: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    title: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style scoped>
.box-card{
    margin-left: auto;
    margin-right: auto;
    width: 90%;
}
</style>