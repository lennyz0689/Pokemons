const {Router} = require('express')
const { showPokemon, showPokemonById, createPokemon } = require('../handlers/pokemon')

const pokemon = Router()

pokemon.get('/', showPokemon)
pokemon.get('/:id', showPokemonById)
pokemon.post('/', createPokemon)


module.exports = { pokemon }