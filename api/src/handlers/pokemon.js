const { showPokemonController } = require('../controllers/pokemon')

const showPokemon = async (req, res) => {
    try {
        const result = await showPokemonController()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { showPokemon }