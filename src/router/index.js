//import引入路由组件
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading


/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/userlist', component: () => import('@/views/nested/menu1'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    // hidden: true,//隐藏菜单
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '菜单',icon:'dashboard', noCache: true, affix: true }
    }]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '请假审批', icon: 'drag' }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '我的班级', icon: 'table' }
      },
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Menu',
    meta: {
      title: '学生考核',
      icon: 'nested'
    },
    children: [
      // {
      //   path: 'menu1',
      //   component: () => import('@/views/nested/menu1/index'), // Parent router-view
      //   name: 'Menu1',
      //   meta: { title: '学生信息' },
      // },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '考勤查询' }
      }
    ]
  },
  // {
  //   path: '/kaoqin',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'kaoqin',
  //       name: 'kaoqin',
  //       component: () => import('@/views/kaoqin/kaoqin'),
  //       meta: { title: '考勤记录', icon: 'bug' }
  //     }
  //   ]
  // },
  {
    path: '/page',
    component: Layout,
    children: [
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/page/message'),
        meta: { title: '我的留言', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})