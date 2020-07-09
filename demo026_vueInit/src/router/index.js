import Vue from 'vue'
import Router from 'vue-router'
import { HOME, HOME_PROJECT_PANEL, HOME_PROJECT_LOAD, HOME_PROJECT } from './name'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: HOME,
      component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
