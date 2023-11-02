const { showTypesController } = require('../controllers/type')

const showTypes = async (req, res) => {
    try {
        const result = await showTypesController()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { showTypes }