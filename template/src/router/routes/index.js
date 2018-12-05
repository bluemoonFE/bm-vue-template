import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      diyShare: true
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  }
]
