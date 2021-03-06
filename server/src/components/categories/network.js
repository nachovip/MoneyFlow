const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', async (req, res) => {
  res.json(await controller.getAll())
})

module.exports = router
