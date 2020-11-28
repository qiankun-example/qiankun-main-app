<template>
  <layout :loading="loading"></layout>
</template>

<script>
import Nprogress from 'nprogress'
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
  watch: {
    loading(val) {
      if(val) {
        Nprogress.start()
      } else {
        this.$nextTick(() => {
          Nprogress.done()
        })
      }
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
