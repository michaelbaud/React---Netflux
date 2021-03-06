const { REACT_APP_api_key } = process.env

const API_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
const API_KEY = REACT_APP_api_key
const BACKDROP_SIZE = 'w1280'
const POSTER_SIZE = 'w500'

export {
    API_URL,
    IMAGE_BASE_URL,
    API_KEY,
    BACKDROP_SIZE,
    POSTER_SIZE
}