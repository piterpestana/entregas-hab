
import config from './config.js'
import Home from '../views/Home.vue'

const axios = require('axios').default;

const apiKey = config.apiKey

const BASE_URL = "https://ws.audioscrobbler.com/"
const URL_GEO = "2.0/?method=geo.gettopartists&country=spain&api_key=4b74ad6d36aeb17ec20af4b14338fe14&format=json"
const URL_TOP = "2.0/?method=geo.gettoptracks&country=spain&api_key=4b74ad6d36aeb17ec20af4b14338fe14&format=json"
const TOP_TAGS = "2.0/?method=chart.gettoptags&api_key=4b74ad6d36aeb17ec20af4b14338fe14&format=json"

async function getArtists() {
    try {
        const response = await axios.get(`${BASE_URL}${URL_GEO}`);
        return response
    } catch (error) {
        console.error(error);
    }
}

async function getTopTracks() {
    try {
        const response = await axios.get(`${BASE_URL}${URL_TOP}`);
        return response
    } catch (error) {
        console.error(error);
    }
}

async function getTopTags() {
    try {
        const response = await axios.get(`${BASE_URL}${TOP_TAGS}`);
        console.log(response)
        return response
    } catch (error) {
        console.error(error);
    }
}

export default {
    getArtists,
    getTopTracks,
    getTopTags
}
