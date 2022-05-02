<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from "vue-router"

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const router = useRouter()
const goMemoView = ()=>{
  router.push('/memo/')
}
const goMemoCreate = ()=>{
  router.push('/memo/new')
}
</script>
<template>
  <el-container>
    <el-header>
      <h1>LOGO</h1>
      <!-- TODO 後でなおす -->
    </el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="goMemoView">みる</el-menu-item>
      <el-menu-item index="2" @click="goMemoCreate">つくる</el-menu-item>
      <el-menu-item index="3" disabled>さがす</el-menu-item>
    </el-menu>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
