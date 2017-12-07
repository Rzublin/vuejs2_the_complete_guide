import Vue from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

Vue.component('app-server-status', Hello);

new Vue({
  el: '#app',
  render: h => h(App)
})
