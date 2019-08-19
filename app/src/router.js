import Vue from "vue";
import Router from "vue-router";
import Home from "./views/index.vue";
import Person from "./views/Personal.vue";
import SameCity from "./views/City.vue";
import Hotnews from "./views/Hot.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/person",
      name: "personal",
      component: Person
    },
    {
      path:'/samecity',
      name:'city',
      component:SameCity
    },
    {
      path:"/hot",
      name:'hotnews',
      component:Hotnews
    }
  ]
});
