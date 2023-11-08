const axios = require('axios')
const { pokemon, type } = require('../db')
const { Op } = require('sequelize')

const showPokemonController = async () => {
    const result = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')).data
    const apiData = await Promise.all(result.results.map(async (pokemon) => {
        return (await axios.get(pokemon.url)).data
    }))
    const database = await pokemon.findAll({
        include: {
            model: type,
            attributes: ['nombre'],
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
        imagen: pokemon.sprites.other.dream_world.front_default,
        vida: pokemon.stats[0].base_stat,
        ataque: pokemon.stats[1].base_stat,
        defensa: pokemon.stats[2].base_stat,
        velocidad: pokemon.stats[5].base_stat,
        altura: pokemon.height,
        peso: pokemon.weight,
        types: pokemon.types.map(types => ({ nombre: types.type.name }))
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
    const nombre = name.toLowerCase()
    const database = await pokemon.findAll({
        where: {
            nombre: {
                [Op.iLike]: `%${nombre}%`,
            }
        },
        include: {
            model: type,
            attributes: ['nombre'],
            through: {
                attributes: []
            }
        }
    })

    let result = null
    try {
        result = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)).data
    } catch (error) {
    }

    if (database.length <= 0 && !result) {
        return 'No se encontraron coincidencias'
    } else {
        return result === null ? [...database] : cleanApi([result], database)
    }
}

const createPokemonController = async (nombre, imagen, vida, ataque, defensa, tipos) => {
    const nuevoPokemon = await pokemon.create({
        nombre: nombre, 
        imagen: imagen, 
        vida: vida, 
        ataque: ataque, 
        defensa: defensa
    })
    if (tipos.length >= 2) {
        await nuevoPokemon.addType(tipos)
        return nuevoPokemon
    }else{
        return 'Hubo un error al cargar los datos'
    }
}

module.exports = {
    showPokemonController,
    showPokemonByIdController,
    showPokemonByIdControllerDb,
    showPokemonControllerName,
    createPokemonController
}   