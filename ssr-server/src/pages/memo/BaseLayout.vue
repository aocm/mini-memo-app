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
const goTop = ()=>{
  router.push('/')
}
</script>
<template>
  <el-container>
    <el-header>
      <div id="logo" @click="goTop">MINI-MEMO-APP</div>
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

<style scoped>
#logo {
  font-size: 18px;
  text-align: center;
  background: #dfefff;
  box-shadow: 0px 0px 0px 5px #dfefff;
  border: dashed 1px #96c2fe;
  padding: 0.2em 0.5em;
  color: #454545;
}
</style>