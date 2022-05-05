<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div id="top-logo">
          MINI-MEMO-APP
        </div>
      </el-header>
      <el-main>
        <router-link to="/memo">
          <span id="goto-memo-link"> goto memo</span>
        </router-link>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
#top-logo {
  font-size: 60px;
}
.common-layout {
  text-align: center;
  background: #dfefff;
  box-shadow: 0px 0px 0px 5px #dfefff;
  border: dashed 1px #96c2fe;
  padding: 10em 2em 10em 2em;
  color: #454545;
}
</style>