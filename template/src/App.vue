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
{{#unless router}}
import HelloWorld from './components/HelloWorld'
{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
</script>
