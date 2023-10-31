const { showPokemonController,
    showPokemonByIdController,
    showPokemonByIdControllerDb,
    showPokemonControllerName } = require('../controllers/pokemon')

const showPokemon = async (req, res) => {
    const { name } = req.query
    try {
        if (name === undefined) {
            const result = await showPokemonController()
            res.status(200).json(result)
        } else {
            const result = await showPokemonControllerName(name)
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const showPokemonById = async (req, res) => {
    const { id } = req.params
    try {
        if (isNaN(id) === false) {
            const result = await showPokemonByIdController(id)
            res.status(200).json(result)
        } else {
            const result = await showPokemonByIdControllerDb(id)
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { showPokemon, showPokemonById }