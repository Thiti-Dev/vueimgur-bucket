import Vue from 'vue'
import Vuex from 'vuex'

// Importing module
import auth from './modules/auth'

Vue.use(Vuex) // Initial handshake

export default new Vuex.Store({
    modules: {
        auth
    }
})