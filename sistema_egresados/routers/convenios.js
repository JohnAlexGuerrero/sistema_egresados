const express = require('express')
const Empresa = require('../models/empresas')
const router = express.Router()

//importamos modelo
const empresa = require('../models/empresas')

router.get('/', async(req, res)=>{
    const empresas = await Empresa.findAll()
    res.render('convenios/index', { empresa: empresa })
})

module.exports = router