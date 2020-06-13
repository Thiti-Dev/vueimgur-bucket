import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './vuex/store'

// Importing components
import AuthHandler from './components/AuthHandler'

Vue.use(VueRouter)

//
// ─── ROUTE ──────────────────────────────────────────────────────────────────────
//

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/oauth2/callback',component: AuthHandler}
    ]
})

// ────────────────────────────────────────────────────────────────────────────────


new Vue({
    router,
    store, // follow up the handshake
    render: h=> h(App)
}).$mount('#app')