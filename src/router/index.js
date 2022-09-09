import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import UserList from "@/views/UserList";
import ChatBoard from "@/views/ChatBoard";
import LoginView from "@/views/LoginView";
import SignUp from "@/views/SignUp";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/chat',
    name: 'ChatBoard',
    component: ChatBoard
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
