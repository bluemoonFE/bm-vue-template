!(function (window) {
  /* 设计图文档宽度 */
  var docWidth = 750
  var maxScaleWidth = 640  // 大于该值不在放大
  var minScaleWidth = 320  // 小于该值不在缩小
  var maxScale = (maxScaleWidth / docWidth) * 20
  var minScale = (minScaleWidth / docWidth) * 20
  var doc = window.document
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

  var recalc = (function refreshRem () {
    var clientWidth = docEl.getBoundingClientRect().width

    var tempFontSize = Math.max(Math.min(20 * (clientWidth / docWidth), maxScale), minScale) * 5
    docEl.style.fontSize = tempFontSize + 'px'
    return refreshRem
  })()

  /* 添加倍屏标识，安卓倍屏为1 */
  docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1)

  if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
    /* 添加IOS标识 */
    doc.documentElement.classList.add('ios')
    /* IOS8以上给html添加hairline样式，以便特殊处理 */
    if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8) {
      doc.documentElement.classList.add('hairline')
    }
  }

  if (!doc.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(window)
