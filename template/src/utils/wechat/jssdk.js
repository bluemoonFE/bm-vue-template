import wx from 'weixin-js-sdk'
import { getJsSdkSign } from '@/api/wechat'
import { isWeixin } from './tools'
let isGetLocation = false

let isConfiged = false
/**
 * 初始化微信JsSDK
 */
export const initWxJsSDK = () => {
  if (!isWeixin()) {
    return Promise.reject('非微信环境无法config')
  }
  if (isConfiged && is.ios()) {
    return Promise.resolve()
  }
  return getJsSdkSign({
    data: {
      url: window.__wxjs_is_wkwebview  // 微信的 ios 环境
        ? window.landPageUrl.split('#')[0]
        : window.location.href.split('#')[0]
    }
  }).then(result => {
    return new Promise((resolve, reject) => {
      if (result.responseCode === 0) {
        configJsSDK(result)
        wx.ready(configJsSDKSuccessHander.bind(null, resolve))
        wx.error(configJsSDKErrorHandler.bind(null, reject))
      } else {
        reject('JsSDK 接口请求失败')
      }
    })
  })
}

/**
 * 配置分享数据
 * @param {*Object} param0 {title, desc, link, imgUrl, success, cancel}
 */
export const configWxShare = options => {
  // 分享到朋友圈
  wx.onMenuShareTimeline(options)
  // 分享给朋友
  wx.onMenuShareAppMessage(options)

  // 分享到朋友圈 新api
  wx.updateTimelineShareData(options)
  // 分享给朋友 新api
  wx.updateAppMessageShareData(options)
}

/**
 * 配置JsSDK
 * @param {*Object} options
 */
const configJsSDK = options => {
  wx.config({
    // debug: true,
    appId: options.appId,
    timestamp: options.timestamp,
    nonceStr: options.nonceStr,
    signature: options.signature,
    jsApiList: [
      'updateTimelineShareData',
      'updateAppMessageShareData',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone',
      'hideMenuItems',
      'showMenuItems',
      'scanQRCode',
      'closeWindow',
      'getLocation'
    ]
  })
}

/**
 * JsSDK配置失败的处理函数
 */
const configJsSDKErrorHandler = (reject, err) => {
  console.log('configJsSDKError === ', err)
  reject(err)
}

/**
 * JsSDK配置成功的处理函数
 */
const configJsSDKSuccessHander = resolve => {
  resolve()
  if (!isGetLocation) {
    isGetLocation = true
    wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: function(res) {
        // { latitude: 纬度, longitude: 经度, speed: 速度, accuracy: 位置精度 }
        window.appLocation = res
      }
    })
  }
}
