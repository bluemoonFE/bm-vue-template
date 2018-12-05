import AppConst from '@/config'
import buildURL from '@/utils/url/buildURL'
import combineURLs from '@/utils/url/combineURLs'
/**
 * 是否是微信浏览器
 */
export const isWeixin = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  let result = ua.match(/MicroMessenger/i)
  return result && result.length > 0 && result[0] === 'micromessenger'
}

/**
 * 微信网页授权
 * @param {Boolean} needUserInfo 是否需要用户信息
 */
export const authorization = needUserInfo => {
  const redirectUri = buildURL(
    combineURLs(AppConst.APP_BASE_FULL_URL, '/auth'),
    {
      redirect: window.location.href
    }
  )
  const url = buildURL(AppConst.APP_BACKEND_AUTH_LINK, {
    appId: AppConst.APP_APPID,
    redirect_uri: encodeURIComponent(redirectUri),
    scope: needUserInfo ? 'snsapi_userinfo' : 'snsapi_base'
  })
  window.location.replace(url)
}
