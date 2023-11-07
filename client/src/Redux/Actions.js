import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMON_ID = 'GET_POKEMON_ID'

export const getPokemon = () => {
    return async function(dispatch){
        const apiData = await axios.get('http://localhost:3001/pokemon')
        const pokemons = apiData.data
        dispatch({type: GET_POKEMONS, payload: pokemons})
    }
}

export const getPokemonById = (id) =>{
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/pokemon/${id}`)
        const pokemon = apiData.data
        dispatch({type: GET_POKEMON_ID, payload: pokemon})
    }
}