import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import notPage from '../pages/notPage.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: notPage,
    name: '404'
  },
  {
    path: '/',
    name: 'Главная',
    component: HomePage
  },
  {
    path: '/about',
    name: 'О сайте',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/AboutPage.vue')
  },
  {
    path: '/all-cards/:pagename',
    name: 'all-cards',
    query: { page: "1" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/all-cards.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    }  else {
      return { top: 0 }
    }
  }
})

export default router
