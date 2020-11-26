import request from '@/utils/request'

[
  {
    id: "1",
    title: "wl-ui组件",
    icon: "el-icon-monitor",
    module: "subapp-ui",
    defaultRegister: true,
    devEntry: "//localhost:8001",
    depEntry: "//119.45.51.253/main/qiankun-vue2-subapp/",
    routerBase: "/ui",
    children: [
      {
        id: "1-1",
        title: "表格",
        url: "/ui"
      },
      {
        id: "1-2",
        title: "日历",
        url: "/ui/about"
      }
    ]
  }
]


export function getApps() {
 return request({
   method: 'POST',
   url: '/front/user/login'
 })
}