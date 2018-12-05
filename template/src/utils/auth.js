// 用户是否登陆
export function loggedIn() {
  return !!window.store('token')
}
