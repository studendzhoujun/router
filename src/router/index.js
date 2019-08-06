import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['../views/index'], resolve)
const hi = resolve => require(['../views/hi'], resolve)



Vue.use(Router)

const routes = [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
        path: '/hi',
        name: 'hi',
        component: hi
      },
    {
      path: '*',
      redirect: '/index',
      component: index
    }
  ]

  const router = new Router({
    mode: 'history',
    // base: '/consumer/gmac/',
    routes: routes
  })

  export default router