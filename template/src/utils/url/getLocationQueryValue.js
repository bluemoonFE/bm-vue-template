import getQueryValue from './getQueryValue'

export default function getLocationQueryValue(key, options) {
  return getQueryValue(location.search, key, options)
}
