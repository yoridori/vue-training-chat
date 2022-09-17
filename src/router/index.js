import Vue from 'vue'
import VueRouter from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import HomeView from '../views/HomeView.vue'
import UserList from "@/views/UserList";
import AboutView from "@/views/AboutView";
import ChatBoard from "@/views/ChatBoard";
import LoginView from "@/views/LoginView";
import SignUp from "@/views/SignUp";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList,
    // メタフィールド
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
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
  routes,
  // mode: 'history',
  // base: process.env.publicPath,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
