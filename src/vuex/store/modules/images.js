import {router} from '../../../main'
import api from '../../../api/imgur'

const state = {
    images: [] //An empty array as default value :)
}

const getters = {
    allImage: state => state.images
}

const actions = {
    fetchImages: async({commit,rootState}) => {
        const { token } = rootState.auth
        const res = await api.fetchImages(token)
        const images = res.data.data // extracting
        commit('setImages',images)
    },
    uploadImages: async({rootState},images) => {
        const { token } = rootState.auth
        await api.uploadImages(images,token)
        router.push('/')
    }
}

const mutations = {
    setImages: (state,images) => {
        state.images = images
    }
}


export default {
    state,getters,actions,mutations
}