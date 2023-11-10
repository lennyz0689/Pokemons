import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMON_ID = 'GET_POKEMON_ID'
export const GET_POKEMON_NAME = 'GET_POKEMON_NAME'
export const POST_POKEMON = 'POST_POKEMON'
export const CLEAN_CARD = 'CLEAN_CARD'
export const PAGINATE = 'PAGINATE'
export const ORDER = 'ORDER'
export const GET_TYPES= 'GET_TYPES'
export const FILTER_TIPO = 'FILTER_TIPO'

export const getPokemon = () => {
    return async function (dispatch) {
        const apiData = await axios.get('http://localhost:3001/pokemon')
        const pokemons = apiData.data
        dispatch({ type: GET_POKEMONS, payload: pokemons })
    }
}

export const getPokemonById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemon/${id}`)
        const pokemon = apiData.data
        dispatch({ type: GET_POKEMON_ID, payload: pokemon })
    }
}

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(`http://localhost:3001/pokemon?name=${name}`)
            const pokemon = apiData.data
            dispatch({ type: GET_POKEMON_NAME, payload: pokemon })
        } catch (error) {
            const message = error.response.data
            dispatch({ type: GET_POKEMON_NAME, payload: message })
        }

    }
}

export const createPokemon = (form) => {
    return async function (dispatch) {
      try {
        const apiData = await axios.post(`http://localhost:3001/pokemon`, form);
        const pokemon = apiData.data;
        dispatch({ type: POST_POKEMON, payload: pokemon });
        return null; // No hay error, devuelve null
      } catch (error) {
        if (error.response) {
          // Si la respuesta del servidor tiene un mensaje de error
          const errorMessage = error.response.data.error;
          return errorMessage;
        }
      }
    };
  };
  
export const getTypes = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/types`)
        const pokemon = apiData.data
        dispatch({ type: GET_TYPES, payload: pokemon })
    }
}

export const cleanCard = () => {
    return async function (dispatch) {
        dispatch({ type: CLEAN_CARD })
    }
}

export const page = (name) => {
    return async function (dispatch) {
        dispatch({ type: PAGINATE, payload: name })
    }
}

export const orderCards = (name) => {
    return async function (dispatch) {
        dispatch({ type: ORDER, payload: name })
    }
}

export const filterTipo = (tipo) => {
    return async function (dispatch) {
        dispatch({ type: FILTER_TIPO, payload: tipo })
    }
}