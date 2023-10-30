const { showPokemonController, showPokemonByIdController } = require('../controllers/pokemon')

const showPokemon = async (req, res) => {
    try {
        const result = await showPokemonController()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const showPokemonById = async (req, res) => {
    const { id } = req.params
    try {
        const result = await showPokemonByIdController(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { showPokemon, showPokemonById }