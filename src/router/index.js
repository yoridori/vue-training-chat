import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import UserList from "@/views/UserList";
import AboutView from "@/views/AboutView";
// import ChatBoard from "@/views/ChatBoard";
// import LoginView from "@/views/LoginView";
// import SignUp from "@/views/SignUp";
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'UserList',
  //   component: UserList
  // },
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  // {
  //   path: '/chat',
  //   name: 'ChatBoard',
  //   component: ChatBoard
  // },
  // {
  //   path: '/login',
  //   name: 'LoginView',
  //   component: LoginView
  // },
  // {
  //   path: '/signUp',
  //   name: 'SignUp',
  //   component: SignUp
  // },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.publicPath,
})

export default router
