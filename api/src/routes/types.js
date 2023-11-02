const { Router } = require('express')
const { showTypes } = require('../handlers/type')

const type = Router()

type.get('/', showTypes)

module.exports = { type }