const axios = require('axios')
const { type } = require('../db')

const createTypesDatabase = async () => {
    try {
        const ejecuted = await type.count() > 0 ? true : false
        if (!ejecuted) {
            const data = (await axios.get('https://pokeapi.co/api/v2/type')).data

            const database = data.results.map(tipo => ({
                nombre: tipo.name
            }))

            return await type.bulkCreate(database)
        }
    } catch (error) {
        return { error: error.message }
    }

}

const showTypesController = async () => await type.findAll()

module.exports = {
    showTypesController,
    createTypesDatabase
}