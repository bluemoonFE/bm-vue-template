{{#wechat}}
import wechat from './wechat'
{{/wechat}}
import account from './account'

export default {
  {{#wechat}}
  wechat,
  {{/wechat}}
  account
}
