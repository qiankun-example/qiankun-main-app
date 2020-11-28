<template>
  <el-container class="app-container">
    <app-aside></app-aside>
    <el-container>
      <el-header class="app-header">
        <app-header></app-header>
      </el-header>
      <el-main class="app-main">
        <el-scrollbar style="height:100%">
          <div id="subapp-container">
            <div id="subapp-viewport"></div>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AppAside from './components/AppAside'
import AppHeader from './components/app-header.vue'
export default {
  name: 'AppLayout',
  components: {
    AppAside,
    AppHeader
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  height: 100vh;
  min-width: 980px;
  ::v-deep .el-main {
    padding: 0;
  }
}

</style>
