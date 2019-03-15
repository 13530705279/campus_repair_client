import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'main',
    redirect: '/login',
    meta: {
      index: 1
    },
    component: () => import('@/views/main.vue'),
    children: [{
      path: 'login',
      name: '用户登陆',
      meta: {
        index: 2
      },
      component: () => import('@/views/login.vue'),
    }, {
      path: 'user-home',
      name: '预约中心',
      meta: {
        index: 3
      },
      component: () => import('@/views/user-home.vue'),
    }, {
      path: 'user-register',
      name: '用户注册',
      meta: {
        index: 3,
      },
      component: () => import('@/views/registered.vue'),
    },{
      path:'person-list/:id',
      name:'个人中心',
      meta:{
        index:4,
      },
      component:() => import('@/components/person-item.vue')
    }]
  }]
})


router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name
  }
  next()
})

export default router