const axios = require('axios')

const showPokemonController = async () => {
    const apiclear = []
    for (let i = 1; i <= 70; i++) {
        const result = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)).data
        apiclear.push(result)
    }
    return cleanApi(apiclear)

}

const cleanApi = (api) => {
    const apiclear = api.map(pokemon => ({
        id: pokemon.id,
        Nombre: pokemon.name,
        Imagen: pokemon.sprites.front_default,
        Vida: pokemon.stats[0].base_stat,
        Ataque: pokemon.stats[1].base_stat,
        Defensa: pokemon.stats[2].base_stat,
    }))

    return apiclear
}
module.exports = { showPokemonController }