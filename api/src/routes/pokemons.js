const {Router} = require('express')
const { showPokemon } = require('../handlers/pokemon')

const pokemon = Router()

pokemon.get('/', showPokemon)


module.exports = { pokemon }