<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { getData } from '@/utils/api.js'

const selectData= (data)=>{
  selectedData.date = data.date
  selectedData.name = data.name
  selectedData.title = data.title
}

const isServer = import.meta.env.SSR
const fetchData = reactive({
  result: [],
})
const selectedData = reactive({
  name: 'Not selected',
})
if(!isServer){
  await getData('/api/memo/list').then((res)=>{
    fetchData.result = res.result
  })
}

</script>

<template>
  <el-container>
    <el-aside width="40%">
      <el-table
        :data="fetchData.result"
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

<style scoped>
.box-card{
    margin-left: auto;
    margin-right: auto;
    width: 90%;
}
</style>