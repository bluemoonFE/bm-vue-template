import Home from '@/views/Home.vue'
{{#wechat}}
import Auth from '@/views/Auth.vue'
{{/wechat}}
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
  }{{#wechat}},
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  }{{/wechat}}
]
