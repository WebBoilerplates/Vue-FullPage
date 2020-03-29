import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Fullpage/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/Fullpage/About.vue")
  },
  {
    path: "/test",
    name: "About2",
    component: () => import("../views/Fullpage/About2.vue")
  },
  {
    path: "/test2",
    name: "About3",
    component: () => import("../views/Fullpage/About3.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
