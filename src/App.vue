<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <GetIss></GetIss>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GetIss from './components/GetIss'
export default {
  name: 'app',
  components: {
    GetIss
  }
}
</script>

<style>
#app {
  font-family: product sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
