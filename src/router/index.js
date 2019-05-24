
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

 const routers = new Router({
  routes: [
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/', redirect: { name: '首页' }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/index1-1',
      name: 'index1-1',
      component: () => import('../views/index/index1-1')
    },
    {
      path: '/index1-2',
      name: 'index1-2',
      component: () => import('../views/index/index1-2')
    },
    {
      path: '/index1-3',
      name: 'index1-3',
      component: () => import('../views/index/index1-3')
    },
    {
      path: '/index1-4',
      name: 'index1-4',
      component: () => import('../views/index/index1-4')
    },
    {
      path: '/index1-5',
      name: 'index1-5',
      component: () => import('../views/index/index1-5')
    },
    {
      path: '/index1-6',
      name: 'index1-6',
      component: () => import('../views/index/index1-6')
    },
    {
      path: '/shopping1-1',
      name: 'shopping1-1',
      component: () => import('../views/shopping/shopping1-1')
    },
    {
      path: '/shopping1-2',
      name: 'shopping1-2',
      component: () => import('../views/shopping/shopping1-2')
    },
    {
      path: '/shopping1-3',
      name: 'shopping1-3',
      component: () => import('../views/shopping/shopping1-3')
    },
    {
      path: '/shopping1-4',
      name: 'shopping1-4',
      component: () => import('../views/shopping/shopping1-4')
    },
    {
      path: '/shopping1-5',
      name: 'shopping1-5',
      component: () => import('../views/shopping/shopping1-5')
    },
    {
      path: '/shopping1-6',
      name: 'shopping1-6',
      component: () => import('../views/shopping/shopping1-6')
    },
    {
      path: '/email1-1',
      name: 'email1-1',
      component: () => import('../views/email/email1-1')
    },
    {
      path: '/email1-2',
      name: 'email1-2',
      component: () => import('../views/email/email1-2')
    },
    {
      path: '/email1-3',
      name: 'email1-3',
      component: () => import('../views/email/email1-3')
    },
    {
      path: '/email1-4',
      name: 'email1-4',
      component: () => import('../views/email/email1-4')
    },
    {
      path: '/email1-5',
      name: 'email1-5',
      component: () => import('../views/email/email1-5')
    },
    {
      path: '/email1-6',
      name: 'email1-6',
      component: () => import('../views/email/email1-6')
    }
  ]
})

routers.beforeEach((to, from, next) => {
  var storage = window.localStorage;
  let nowtime = Date.parse(new Date());
  let time = storage.time
  let gologin = nowtime - time
  if (to.path == "/login") {
    next();
  } else {
    if (storage.token && gologin < 86400000) {
      next()
    } else {
      next({
        path: "/login"
      })
    }
  }
})


export default routers