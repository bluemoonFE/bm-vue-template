<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<style src="./style/main.css">
</style>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  components: {
    HelloWorld
  }
}
</script>
