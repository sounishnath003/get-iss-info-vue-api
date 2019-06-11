import Vue from 'vue'
import App from './App.vue'
import './stylesheets/tailwind.min.css'
import './leaflet'
import './stylesheets/leaflet.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
