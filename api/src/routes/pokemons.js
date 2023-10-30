const {Router} = require('express')
const { showPokemon, showPokemonById } = require('../handlers/pokemon')

const pokemon = Router()

pokemon.get('/', showPokemon)
pokemon.get('/:id', showPokemonById)


module.exports = { pokemon }