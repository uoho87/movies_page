
import axios from 'axios'

const API_KEY_TMDB = '210d6a5dd3f16419ce349c9f1b200d6d';
const ROOT_API_TMDB = 'https://api.themoviedb.org/3/';

export const bringAllCharacters = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=8`)
}

export const loginMe = async (body) => {

    return await axios.post(`https://dummyjson.com/auth/login`, body)
}

export const bringMovies = async (criteria) => {

    return await axios.get(`${ROOT_API_TMDB}search/movie?query=${criteria}&include_adult=false&language=en-US&page=4&api_key=${API_KEY_TMDB}`)

}