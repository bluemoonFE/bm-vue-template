import queryString from 'query-string'

// 构建URL
export default function parseSearchString(search, options) {
  return queryString.parse(search, options)
}
