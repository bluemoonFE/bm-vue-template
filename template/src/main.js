import Vue from 'vue'
import App from './App.vue'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store'
{{/vuex}}
import store2 from 'store2'
import AppConst from '@/config'
import fragrant from './fragrant'
{{#wechat}}
import combineURLs from '@/utils/url/combineURLs'
import { isWeixin, authorization } from '@/utils/wechat/tools'
window.landPageUrl = location.href
{{/wechat}}
window.store = store2.namespace(AppConst.APP_PROP_APP_NAME)
!(function() {
  {{#wechat}}
  // 微信授权获取 openid, 重定向到 /auth 路由
  if (isWeixin()) {
    if (
      !window.store.session('openid') &&
      window.location.pathname !== combineURLs(AppConst.APP_BASE_URL, '/auth')
    ) {
      return authorization()
    }
  }
  {{/wechat}}

  Vue.use(fragrant)

  new Vue({
    {{#router}}
    router,
    {{/router}}
    {{#vuex}}
    store,
    {{/vuex}}
    render: h => h(App)
  }).$mount('#app')
})()
