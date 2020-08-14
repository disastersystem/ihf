import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { scrollToTop: true }
  },
  {
    path: '/om',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/jobb',
    name: 'work',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Work.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/bedrifter',
    name: 'company',
    component: () => import(/* webpackChunkName: "company" */ '@/views/treatments/Company.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/pasienterfaringer',
    name: 'reviews',
    component: () => import(/* webpackChunkName: "reviews" */ '@/views/Reviews.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/fysioterapi',
    name: 'physiotherapy',
    component: () => import('@/views/treatments/Physiotherapy.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/yoga',
    name: 'yoga',
    component: () => import('@/views/treatments/Yoga.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/viryayoga',
    name: 'Viryayoga',
    component: () => import('@/views/treatments/Viryayoga.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/yinyoga',
    name: 'Yinyoga',
    component: () => import('@/views/treatments/Yinyoga.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/osteopati',
    name: 'Osteopati',
    component: () => import('@/views/treatments/Osteopati.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/fotpleie',
    name: 'fotpleie',
    component: () => import('@/views/treatments/Fotpleie.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/massasje',
    name: 'massage',
    component: () => import('@/views/treatments/Massage.vue'),
    meta: { scrollToTop: true }
  },
  {
    path: '/svømming',
    name: 'swimming',
    component: () => import('@/views/treatments/Swimming.vue'),
    meta: { scrollToTop: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // scroll to top every route change
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations
      return savedPosition
    } else {
      const position = {}
      // new navigation.
      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash

        // specify offset of the element
        if (to.hash === '#pasienterfaring') {
          position.offset = { y: 100 }
        }
      }
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return position
    }
  },
  routes
})

export default router
