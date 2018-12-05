import { wechat } from './baseRequest'
import AppConst from '../config'

/**
 * JsSKD config
 */
export const getJsSdkSign = (options = {}) => {
  return wechat.post('/getJsSdkSign', options.data, {
    headers: {
      appId: AppConst.APP_APPID
    }
  })
}

export default {
  getJsSdkSign
}
