import createBaseRequest from './createBaseRequest'
import AppConst from '@/config'

export const washMall = createBaseRequest({
  baseURL: AppConst.APP_BACKEND_WASHMALL,
  signWithRow: true
})
{{#wechat}}
export const wechat = createBaseRequest({
  baseURL: AppConst.APP_BACKEND_WECHAT,
  signWithRow: false
})
{{/wechat}}
