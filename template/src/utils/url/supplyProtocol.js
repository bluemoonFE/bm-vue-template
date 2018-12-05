export default function supplyProtocol(url = '', protocol) {
  if (url.startsWith('//')) {
    return protocol + ':' + url
  }
  return url
}
