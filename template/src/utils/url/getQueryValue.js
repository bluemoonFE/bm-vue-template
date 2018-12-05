import queryString from 'query-string'

// 获取某查询的参数值
export default function getQueryValue(search, key, options) {
  let queryObj = queryString.parse(search, options) || {}
  return queryObj[key]
}
