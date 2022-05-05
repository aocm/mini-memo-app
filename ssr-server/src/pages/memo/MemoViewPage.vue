<script setup lang="ts">
import { reactive } from '@vue/runtime-core'
import { getData } from '@/utils/api'
import {useRoute} from 'vue-router'

const isServer = import.meta.env.SSR
const route= useRoute()
const data = reactive({
  id: '',
  name: '',
  title: '',
  date: '',
  description: ""
})
if(!isServer){
  await getData('/api/memo/view?id='+route.query.id)
  .then((res)=>{
    data.id = res.result.id
    data.name = res.result.name
    data.title = res.result.title
    data.date = res.result.date
    data.description = res.result.description
  })
}

</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{data.title}}</span>
      </div>
    </template>
    {{data}}
  </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>