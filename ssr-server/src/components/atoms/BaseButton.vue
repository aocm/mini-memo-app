<script setup>
// import { ElButton } from 'element-plus'
// import 'element-plus/es/components/message/style/css'
const props = defineProps({
  text: String
})
</script>

<template>
  <el-button>{{text}}</el-button>
</template>