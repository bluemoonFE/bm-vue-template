import * as filters from './filters'
import * as directives from './directives'
{{#vant}}
import vant from './vant'
{{/vant}}

export default {
  install(Vue) {
    Vue.config.productionTip = false

    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
    {{#vant}}
    Vue.use(vant)
    {{/vant}}
  }
}
