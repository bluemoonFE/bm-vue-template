import queryString from 'query-string'

// 构建URL
export default function buildURL(url, params, options) {
  let targetUrl = url

  if (params) {
    targetUrl +=
      (/\?/.test(url) ? '&' : '?') + queryString.stringify(params, options)
  }
  return targetUrl
}
