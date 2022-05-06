<script lang="ts" setup>
import { reactive } from 'vue'
import { postData } from '@/utils/api.js'

const form = reactive({
  name: '',
  title: '',
  description: '',
})

const onSubmit = async () => {
  await postData('/api/memo',form)
    .then(()=>window.alert('success'))
    .catch(()=>window.alert('error'))
}
</script>

<template>
  <div class="form-container">
    <el-form :model="form" label-width="120px">
      <el-form-item label="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="description">
        <el-input v-model="form.description" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.form-container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>