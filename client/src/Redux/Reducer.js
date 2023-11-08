import { GET_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME } from "./Actions"

const initialState = {
    allPokemons: [],
    pokemonId: [],
    pokemonName: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return { ...state, allPokemons: action.payload, pokemonName: []}
        case GET_POKEMON_ID:
            return { ...state, pokemonId: action.payload }
        case GET_POKEMON_NAME:
            return { ...state, pokemonName: action.payload }
        default:
            return { ...state }
    }
}

export default rootReducer