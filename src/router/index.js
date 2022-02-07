import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Adham from "../views/Adham.vue";
import Omar from "../views/Omar.vue";
import Sarah from "../views/Sarah.vue";
import Uncle from "../views/Uncle.vue";
import Tant from "../views/Tant.vue";
import Maya from "../views/Maya.vue";
import Ashry from "../views/Ashry.vue";
import Youssef from "../views/Youssef.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/adham",
    name: "adham",
    component: Adham
  },
  {
    path: "/omar",
    name: "omar",
    component: Omar
  },
  {
    path: "/sarah",
    name: "sarah",
    component: Sarah
  },
  {
    path: "/uncle",
    name: "uncle",
    component: Uncle
  },
  {
    path: "/tant",
    name: "tant",
    component: Tant
  },
  {
    path: "/maya",
    name: "maya",
    component: Maya
  },
  {
    path: "/ashry",
    name: "ashry",
    component: Ashry
  },
  {
    path: "/youssef",
    name: "youssef",
    component: Youssef
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
