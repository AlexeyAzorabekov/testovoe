import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Entry',
    component: () => import(/* webpackChunkName: "entry" */ '../pages/EntryPage/EntryPage.vue'),
    beforeEnter: (to, from, next) => {
      const isAuht = localStorage.getItem('user_info')
      if (isAuht) {
        next({ name: 'Main' })
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/LoginPage/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../pages/RegisterPage/RegisterPage.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '../pages/MainPage/MainPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "404" */ '../pages/404/PageNotFound.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const isAuht = localStorage.getItem('user_info')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuht) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
