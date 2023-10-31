const axios = require('axios')
const { pokemon, type } = require('../db')

const showPokemonController = async () => {
    const result = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')).data
    const apiData = await Promise.all(result.results.map(async (pokemon) => {
        return (await axios.get(pokemon.url)).data
    }))
    const database = await pokemon.findAll({
        include: {
            model: type,
            attributes: ['Nombre'],
            through: {
                attributes: []
            }
        }
    })
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
        tipo: pokemon.types.map(types => ({ Nombre: types.type.name }))
    }))
    if (db === undefined) {
        return apiclear
    } else {
        return [...db, ...apiclear]
    }
}

const showPokemonByIdController = async (id) => {
    const result = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
    return cleanApi([result])
}

const showPokemonByIdControllerDb = async (id) => [await pokemon.findByPk(id, {
    include: {
        model: type,
        attributes: ['Nombre'],
        through: {
            attributes: []
        }
    }
})]

const showPokemonControllerName = async (name) => {
    const database = await pokemon.findAll({ where: { nombre: name } })
    const result = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data
    const data = cleanApi([result])
    return database.concat(data)
}

module.exports = {
    showPokemonController,
    showPokemonByIdController,
    showPokemonByIdControllerDb,
    showPokemonControllerName
}