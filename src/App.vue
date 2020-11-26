<template>
  <layout :loading="loading"></layout>
   <!-- <div class="layout-wrapper">
    <div class="layout-header">
      <div class="logo">QIANKUN</div>
      <ul class="sub-apps">
        <li v-for="item in microApps" :key="item.name" @click="goto(item)">{{ item.name }}</li>
      </ul>
    </div>
    <div id="subapp-container">
      <h4 v-if="loading" class="subapp-loading">Loading...</h4>
      <div id="subapp-viewport"></div>
    </div>
  </div> -->
</template>

<script>
import Layout from '@/layout/index.vue'
import microApps from './micro-apps'

export default {
  name: 'App',
  components: {
    Layout
  },
  data() {
    return {
      loading: true,
      microApps,
    }
  },
  methods: {
    goto (item) {
      history.pushState(null, item.activeRule, item.activeRule)
    },
  }
}
</script>

<style>
.layout-header {
  display: flex;
  align-items: center;
}
</style>
