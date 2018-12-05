/**
 * 自动获得焦点
 */
export const focus = {
  inserted: function(el) {
    // 聚焦元素
    el.focus()
  }
}
