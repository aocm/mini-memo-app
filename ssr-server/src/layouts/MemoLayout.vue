<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter,useRoute } from "vue-router"
const router = useRouter()
const route = useRoute()

const activeIndex = ref(String(route.path))
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
  window.location.href = key
}
const goTop = () => {
  window.location.href = '/'
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
      <el-menu-item index="/memo">みる</el-menu-item>
      <el-menu-item index="/memo/new">つくる</el-menu-item>
      <el-menu-item index="/memo/search" disabled>さがす</el-menu-item>
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