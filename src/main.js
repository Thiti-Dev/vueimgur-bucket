import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './vuex/store'

// Importing components
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import UploadForm from './components/UploadForm'

Vue.use(VueRouter)

//
// ─── ROUTE ──────────────────────────────────────────────────────────────────────
//

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/',component: ImageList},
        {path: '/upload',component: UploadForm},
        {path: '/oauth2/callback',component: AuthHandler}
    ]
})

// ────────────────────────────────────────────────────────────────────────────────


new Vue({
    router,
    store, // follow up the handshake
    render: h=> h(App)
}).$mount('#app')