import Vue from 'vue'
import App from './App'
import store from './vuex/store'

new Vue({
    store, // follow up the handshake
    render: h=> h(App)
}).$mount('#app')