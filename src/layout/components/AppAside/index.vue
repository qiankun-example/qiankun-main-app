<template>
  <el-aside
    class="aside"
    :class="{ collapse: $store.state.isCollapse }"
    style="width: auto"
    :style="{ backgroundColor: '#304156' }"
  >
    <a href="/" class="logo" :style="{ backgroundColor: variables.sidebarBg }">
      <img
        src="http://eduboss.lagou.com/edu-boss-fed/assets/img/logo.e8b9190b.png"
        alt="edu"
      />
      <h1>Edu Boss</h1>
    </a>
    <el-scrollbar class="menu-scollbar">
    <el-menu
      @select="selectMenu"
      :collapse="$store.state.isCollapse"
      class="menu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuTextActive"
      :collapse-transition="false"
    >
      <app-aside-item
        v-for="route in permission_routes"
        :key="route.id"
        :item="route"
      ></app-aside-item>
    </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script>
import { mapGetters } from "vuex";
import { routerGo } from "@/utils/routes";
import variables from "@/styles/jsVariables.scss";
import AppAsideItem from "./app-aside-item.vue";
export default {
  name: "AppAside",
  components: {
    AppAsideItem,
  },
  data() {
    return {
      variables,
    };
  },
  computed: {
    ...mapGetters(["permission_routes"]),
  },
  methods: {
    selectMenu(index) {
      routerGo(index, "premission");
    },
  },
};
</script>
<style lang="scss" scoped>
.aside {
  transition: width .28s;
  .logo {
    display: flex;
    align-items: center;
    padding: 15px 0 15px 20px;
    line-height: 30px;
    color: $primary-color;
    text-decoration: none;
    img {
      margin-right: 10px;
      width: 30px;
    }
    h1 {
      display: inline-block;
      transition: width 0.3s;
      width: 106px;
      white-space: nowrap;
      overflow: hidden;
      margin: 0;
    }
  }
  .menu-scollbar {
    min-height: calc(100vh - 60px);
    ::v-deep .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  .el-menu {
    &:not(.el-menu--collapse) {
      width: 240px;
    }
  }
  &.collapse {
    .logo {
      h1 {
        width: 0;
      }
    }
    ::v-deep .el-menu--collapse>.el-menu-item span {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }
    ::v-deep .el-menu--collapse .el-submenu > .el-submenu__title > span {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }
    ::v-deep .el-menu--collapse .el-submenu>.el-submenu__title .el-submenu__icon-arrow {
      display: none;
    }
  }
}
</style>
