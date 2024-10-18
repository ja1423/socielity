import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Explore from "../pages/Explore.vue";
import News from "../components/News.vue";
import Why from "../components/Why.vue";
import Videos from "../components/Videos.vue";
import Groups from "../components/Groups.vue";
import FAQ from "../components/FAQ.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },

  { path: '/help-center', component: News },
  { path: '/press', component: Why },
  { path: '/blog', component:Videos },
  { path: '/careers', component: Groups },
  { path: '/faqs', component: FAQ },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
