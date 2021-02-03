import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import Home from '@/views/admin/Home.vue'

Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    component: Dashboard,
    children: [{
      path: '/',
      component: Home,
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router