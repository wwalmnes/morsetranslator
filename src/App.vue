<template>
  <div id="app">
    <h1>Translate to morse</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  font-size: 14px;
  margin: 0;
  padding: 0;
}
* {
  font-family: 'Space Mono', monospace;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
