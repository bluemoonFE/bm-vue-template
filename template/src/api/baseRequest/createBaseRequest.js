import axios from 'axios'
import md5 from 'md5'
import AppConst from '@/config'

// 生成公参
const getBaseParam = (rowStr = '') => {
  let client = AppConst.APP_PROP_CLIENT
  let cuid = AppConst.APP_PROP_CUID
  let format = AppConst.APP_PROP_FORMAT
  let time = Date.now()
  let version = AppConst.APP_PROP_VERSION
  let secret = AppConst.APP_PROP_SECRET
  let sign = md5(
    secret + client + cuid + format + time + version + rowStr + secret
  )
  let appType = AppConst.APP_PROP_APP_TYPE
  return {
    client,
    cuid,
    format,
    time,
    version,
    sign,
    appType
  }
}

// 失败的请求
const errorResponse = {
  responseCode: 9999,
  responseMsg: '网络连接超时',
  isSuccess: false
}

const getBaseRequestConfig = baseURL => {
  return {
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

/**
 * axios请求成功的处理回调
 * @param {*} config
 * @param {*签名的时候是否需要业务参数} signWithRow
 */
const requestSuccessHandler = function(signWithRow, config) {
  let rowStr = JSON.stringify(config.data || {})
  config.params = Object.assign(
    {},
    config.params,
    getBaseParam(signWithRow ? rowStr : '')
  )
  config.data = rowStr
  return config
}

const requestErrorHandler = function(error) {
  console.log('requestError === ', error)
  return Promise.resolve(errorResponse)
}

const responseSuccessHandler = function(response) {
  return response.data
}

const responseErrorHandler = function(error) {
  if (error.response) {
    // 请求已经发出去，服务器返回错误
    console.log(error.response)
  } else {
    // 请求没有发出去，网络错误等
    console.log('Error', error.message)
  }
  console.log(error.config)

  // return Promise.reject(error)
  return Promise.resolve(errorResponse)
}

/**
 * 创建一个base请求
 * @param {*} baseURL
 * @param {* 签名的时候是否需要业务参数} signWithRow
 */
export default function({ baseURL, signWithRow = false }) {
  const req = axios.create(getBaseRequestConfig(baseURL))
  // Add a request interceptor
  req.interceptors.request.use(
    requestSuccessHandler.bind(null, signWithRow),
    requestErrorHandler
  )

  // Add a response interceptor
  req.interceptors.response.use(responseSuccessHandler, responseErrorHandler)
  return req
}
