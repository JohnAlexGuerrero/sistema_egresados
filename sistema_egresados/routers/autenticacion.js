const express = require('express')
const router = express.Router()

const usuario = require('../models/autenticacion')

router.post('/signup', (req,res)=>{
    const { email, password1 } = req.body
    usuario.create({
        email: email,
        password: password1
    }).then(user=>{
        res.redirect('autenticacion/login')
    }).catch(error =>{
        console.log(error)
    })
})

module.exports = router