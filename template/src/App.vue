<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{/router}}
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  components: {
    HelloWorld
  }
}
</script>
