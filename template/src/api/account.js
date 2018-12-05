import { washMall } from './baseRequest'

/**
 * 2.01-获取验证码
 */
export const getVerifyCode = (options = {}) => {
  return washMall.post('/account/getVerifyCode', options.data)
}
/**
 * 4.02-授权码校验
 */
export const quickLogin = (options = {}) => {
  return washMall.post('/account/quickLogin', options.data)
}

export default {
  getVerifyCode,
  quickLogin
}
