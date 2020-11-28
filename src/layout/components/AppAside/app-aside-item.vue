<template>
  <div>
    <template v-if="!item.children || !item.children.length">
        <el-menu-item :index="item.url">
          <i :class="[item.icon]"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
    </template>
    <el-submenu v-else ref="subMenu" :index="item.module" popper-append-to-body>
      <template slot="title">
          <i :class="[item.icon]"></i>
          <span>{{ item.title }}</span>
        </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>