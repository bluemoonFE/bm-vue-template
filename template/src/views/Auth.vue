<template>
  <div></div>
</template>

<script>
import AppConst from '@/config'
/**
 * 微信登陆授权中转页面
 */
export default {
  mounted() {
    // openid 授权中转页面
    const { openid, redirect } = this.$route.query
    if (openid) {
      window.store.session('openid', openid)
      window.store.session('user', this.$route.query)
    }
    // 跳转到目标页面
    if (redirect) {
      window.location.replace(decodeURIComponent(redirect))
    } else {
      window.location.replace(AppConst.APP_BASE_FULL_URL)
    }
  }
}
</script>
