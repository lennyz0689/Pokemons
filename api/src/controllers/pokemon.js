const axios = require('axios')
const { pokemon } = require('../db')

const showPokemonController = async () => {
    const result = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')).data
    const apiData = await Promise.all(result.results.map(async (pokemon) => {
        return (await axios.get(pokemon.url)).data
    }))
    const database = await pokemon.findAll()
    return cleanApi(apiData, database)
}

const cleanApi = (api, db) => {
    const apiclear = api.map(pokemon => ({
        id: pokemon.id,
        nombre: pokemon.name,
        imagen: pokemon.sprites.front_default,
        vida: pokemon.stats[0].base_stat,
        ataque: pokemon.stats[1].base_stat,
        defensa: pokemon.stats[2].base_stat,
    }))
    return [...db, ...apiclear]
}

const showPokemonByIdController = async (id) => {
    const result = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
    return cleanApi([result])
}

module.exports = { showPokemonController, showPokemonByIdController }