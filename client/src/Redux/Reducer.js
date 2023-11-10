import { GET_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME, CLEAN_CARD, PAGINATE, ORDER, GET_TYPES, FILTER_TIPO } from "./Actions"

const initialState = {
    allPokemons: [],
    allPokemonsBackup: [],
    pokemonId: [],
    pokemonName: [],
    allTypes: [],
    actualPage: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return { ...state, allPokemons: [...action.payload].splice(0, 12), allPokemonsBackup: action.payload }
        case GET_POKEMON_ID:
            return { ...state, pokemonId: action.payload }
        case GET_POKEMON_NAME:
            return { ...state, pokemonName: action.payload }
        case GET_TYPES:
            return {...state, allTypes: action.payload}
        case CLEAN_CARD:
            return { ...state, pokemonId: [], pokemonName: [] }
        case PAGINATE:
            const siguiente_page = state.actualPage + 1
            const anterior_page = state.actualPage - 1
            const index = action.payload === 'next' ? siguiente_page * 12 : anterior_page * 12

            if (action.payload === 'next' && index >= state.allPokemonsBackup.length) return state
            else if (action.payload === 'prev' && anterior_page < 0) return state

            return {
                ...state, allPokemons: [...state.allPokemonsBackup].splice(index, 12),
                actualPage: action.payload === 'next' ? siguiente_page : anterior_page
            }
        case ORDER:
            switch (action.payload) {
                case 'AZNombre':
                    let AZN = [...state.allPokemonsBackup].sort((a, b) => {
                        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1
                        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1
                        return 0
                    })
                    return {
                        ...state,
                        allPokemons: [...AZN].splice(0, 12),
                        allPokemonsBackup: AZN,
                        actualPage: 0
                    }
                case 'ZANombre':
                    let ZAN = [...state.allPokemonsBackup].sort((a, b) => {
                        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1
                        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return -1
                        return 0
                    })
                    return {
                        ...state,
                        allPokemons: [...ZAN].splice(0, 12),
                        allPokemonsBackup: ZAN,
                        actualPage: 0
                    }
                case 'AZAtaque':
                    let AZA = [...state.allPokemonsBackup].sort((a, b) => {
                        if (a.ataque < b.ataque) return 1
                        if (a.ataque > b.ataque) return -1
                        return 0
                    })
                    return {
                        ...state,
                        allPokemons: [...AZA].splice(0, 12),
                        allPokemonsBackup: AZA,
                        actualPage: 0
                    }
                case 'ZAAtaque':
                    let ZAA = [...state.allPokemonsBackup].sort((a, b) => {
                        if (a.ataque > b.ataque) return 1
                        if (a.ataque < b.ataque) return -1
                        return 0
                    })
                    return {
                        ...state,
                        allPokemons: [...ZAA].splice(0, 12),
                        allPokemonsBackup: ZAA,
                        actualPage: 0
                    }
                    case 'DB':
                        let DB = [...state.allPokemonsBackup].filter(pokemon => pokemon.created === true);
                        return {
                            ...state,
                            allPokemons: [...DB].splice(0, 12),
                            actualPage: 0
                        };
                    case 'API':
                        let API = [...state.allPokemonsBackup].filter(pokemon => pokemon.created === false);
                        return {
                            ...state,
                            allPokemons: [...API].splice(0, 12),
                            actualPage: 0
                        };
                    
                default: state
                    break
            }
            case FILTER_TIPO:
                const filteredPokemons = state.allPokemonsBackup.filter(pokemon => {
                    return pokemon.types.some(type => type.nombre === action.payload);
                });
            
                return {
                    ...state,
                    allPokemons: filteredPokemons.slice(0, 12),
                    actualPage: 0
                };
        default:
            return { ...state }
    }
}

export default rootReducer