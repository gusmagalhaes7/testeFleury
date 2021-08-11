const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.get('/numero_ficha', taskController.listarTarefa)

module.exports = router