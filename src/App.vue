<template>
  <div id="app" class="mx-auto max-w-4xl shadow-2xl p-12">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header></Header>
    <GetIss></GetIss>
    <Footer></Footer>
  </div>
</template>

<script>
import GetIss from './components/GetIss'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    GetIss,
    Header,
    Footer
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
