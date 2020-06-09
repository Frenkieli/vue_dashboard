import Vue from 'vue'
import App from './App.vue'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import socket from 'socket.io-client';

// Vue.use(VueAxios, axios)
// Vue.use(socket)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
