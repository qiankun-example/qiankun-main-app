const state = {
  user: JSON.parse(window.localStorage.getItem('user') || 'null'),
  routes: [
    {
      id: "1",
      title: "权限管理",
      icon: "el-icon-location",
      module: "permission",
      children: [
        {
          id: "1-1",
          title: "角色列表",
          url: "/permission/role"
        },
        {
          id: "1-2",
          title: "菜单列表",
          url: "/permission/menu"
        },
        {
          id: "1-3",
          title: "资源列表",
          url: "/permission/resource"
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

const mutations = {
}

export default {
  namespaced: true,
  state,
  mutations
}