const express = require('express')
const { sync } = require('../databases/db')
const router = express.Router()

//importamos modelo
const Egresado = require('../models/egresado')
const Estudio = require('../models/estudios')
const Familia = require('../models/familia')
const Laboral = require('../models/laboral')


router.get('/', async(req, res)=>{
    const egresados = await Egresado.findAll()
    res.render('egresados/index', { egresados: egresados })
})

router.get('/informacion-personal/:id', async(req, res)=>{
    const egresado = await Egresado.findOne({
        where:{
            id_number: req.params.id
        }
    })
    res.render('egresados/info_basic', { egresado: egresado })
})

router.get('/informacion-academica/:id', async(req, res)=>{
    
    const egresadoIdFk = req.params.id
    const estudioEgresado = await Estudio.findAll({
        where:{
            egresadoId: egresadoIdFk
        }
    })
    res.render('egresados/info_academic', { estudios: estudioEgresado, egresadoId: egresadoIdFk })
})

router.get('/informacion-laboral/:id', async(req, res)=>{
    const egresadoIdFk = req.params.id
    const laboral = await Laboral.findAll({
        where:{
            egresadoId: egresadoIdFk
        }
    })
    res.render('egresados/info_job', { trabajos: laboral, egresadoId: egresadoIdFk })
})

router.get('/informacion-familiar/:id', async(req, res)=>{
    const egresadoIdFk = req.params.id
    const familiares = await Familia.findAll({
        where:{
            egresadoId: egresadoIdFk
        }
    })
    res.render('egresados/info_family', { familiares: familiares, egresadoId: egresadoIdFk })
})

router.get('/p/informacion-basica', (req, res)=>{
    res.render('egresados/form_info_basic')
})

router.post('/insert-egresado', (req, res)=>{
    const { id, name, lastname, gender, document, birthday,citybirth,phone, statusmarital, address,neighborhood } = req.body
    
    Egresado.create({
        id_number: document,
        userId: id,
        name: name,
        lastname: lastname,
        gender: gender,
        birthday: birthday,
        phone: phone,
        marital_status: statusmarital,
        city_birth: citybirth,
        address: address,
        neighborhood: neighborhood
    }).then(egresado =>{
        res.redirect('/perfil')
    }).catch(error =>{
        console.log(error)
    })
})

router.post('/insert-estudios/:id', (req, res)=>{
    const egresadoId = req.params.id
    const { title, institute, level, graduation } = req.body

    Estudio.create({
        professional_title: title,
        institute: institute,
        study_level: level,
        graduation: graduation,
        egresadoId: egresadoId
    }).then(egresado =>{
        res.redirect('/egresados/informacion-academica/'+egresado.egresadoId)
    }).catch(error =>{
        console.log(error)
    })
})

router.post('/insert-familiar/:id', (req, res)=>{
    const egresadoId = req.params.id
    const { name, document, age, birthday, parentese, occupation } = req.body

    Familia.create({
        name: name,
        nro_document: document,
        age: age,
        birthday: birthday,
        family_relationship: parentese,
        occupation: occupation,
        egresadoId: egresadoId
    }).then(familia =>{
        res.redirect('/egresados/informacion-familiar/'+familia.egresadoId)
    }).catch(error =>{
        console.log(error)
    })
})


module.exports = router