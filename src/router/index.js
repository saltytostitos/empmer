import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const about = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
const work = () => import(/* webpackChunkName: "work" */ "../views/Work.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: about
  },
  {
    path: "/work",
    name: "work",
    component: work
  },
  {
    path: "*",
    redirect: {
      name: "home"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
