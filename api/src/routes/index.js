const { Router } = require('express');
const { pokemon } = require('./pokemons')
const { type } = require('./types')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/pokemon', pokemon)
router.use('/types', type)


module.exports = router;
