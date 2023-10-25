require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const modelPokemon = require('./models/Pokemon')
const modelType = require('./models/Type')

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);

modelPokemon(sequelize)
modelType(sequelize)

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { pokemon, type } = sequelize.models;

pokemon.belongsToMany(type, {through: 'pokemonType', timestamps: false})
type.belongsToMany(pokemon, {through: 'pokemonType', timestamps: false})

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
