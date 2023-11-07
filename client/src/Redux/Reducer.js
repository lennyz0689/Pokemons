import { GET_POKEMONS, GET_POKEMON_ID } from "./Actions"

const initialState = {
    allPokemons: [],
    pokemonId: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return { ...state, allPokemons: action.payload }
        case GET_POKEMON_ID:
            return { ...state, pokemonId: action.payload }
        default:
            return { ...state }
    }
}

export default rootReducer