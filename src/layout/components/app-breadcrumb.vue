<template>
  <el-breadcrumb separator="/">
     <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span v-if="index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
const levelList = [] // 给data的状态定义类型
export default {
  name: 'AppBreadcrumb',
  data () {
    return {
      levelList: levelList
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    handleLink (item: RouteRecord) {
      const { redirect } = item
      if (redirect) { // 重定向的, 重定向与当前相同处理
        if (redirect === this.$route.path) return
        this.$router.push(redirect as RawLocation)
        return
      }
      this.$router.push(item)
    }
  }
}
</script>
