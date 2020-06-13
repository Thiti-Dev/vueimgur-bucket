import axios from 'axios'
import qs from 'qs'

// Importing constrant
import {CLIENT_ID} from '../configs/imgur-oauth2.json'
const ROOT_URL = 'https://api.imgur.com'

export default {
    login(){
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}` // navigating to oauth2
    },
    fetchImages(token){
        return axios.get(`${ROOT_URL}/3/account/me/images`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    uploadImages(images,token){
        // @NOTE: images is the ArrayLike
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image',image);
            return axios.post(`${ROOT_URL}/3/image`,formData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })

        // Parallel
        return Promise.all(promises)
    }
}