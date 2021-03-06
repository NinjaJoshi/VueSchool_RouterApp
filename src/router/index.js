import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path:"/details/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "detail" */ "../views/DestinationDetails")
    // component: Pamana
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
