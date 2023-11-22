
import axios from 'axios'

export const bringAllCharacters = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=8`)
}