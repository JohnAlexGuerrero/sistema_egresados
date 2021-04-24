const express = require('express')
const router = express.Router()

router.get('/informacion-basica', (req, res)=>{
    res.render('registro/form_info_basic')
})

router.post('/insert-egresado', (req, res)=>{
    const { name, lastname, gender, document, birthday,citybirth,phone, email, statusmarital, address,neighborhood } = req.body
    
    Egresado.create({
        id_number: document,
        name: name,
        lastname: lastname,
        gender: gender,
        birthday: birthday,
        email: email,
        phone: phone,
        marital_status: statusmarital,
        city_birth: citybirth,
        address: address,
        neighborhood: neighborhood
    }).then(egresado =>{
        res.redirect('/registro/informacion-academica/'+egresado.id)
    }).catch(error =>{
        console.log(error)
    })
})

module.exports = router