const state = {
  routes: [
    {
      id: "1",
      title: "权限管理",
      icon: "el-icon-location",
      module: "permision",
      children: [
        {
          id: "1-1",
          title: "角色列表",
          url: "/permision/role"
        },
        {
          id: "1-2",
          title: "菜单列表",
          url: "/permision/menu"
        },
        {
          id: "1-3",
          title: "资源列表",
          url: "/permision/resource"
        }
      ]
    },
    {
      id: "2",
      title: "课程管理",
      icon: "el-icon-menu",
      module: "course",
      url: "/course"
    }
  ] // 菜单数据,
}


export default {
  namespaced: true,
  state
}