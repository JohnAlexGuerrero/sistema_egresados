const express = require('express')
const router = express.Router()

const passport = require('passport')



router.get('/', (req, res) => {
    res.render('pages/index')
})


router.get('/login', (req, res) => {
    res.render('autenticacion/login')
})

router.get('/registro', (req, res) => {
    res.render('autenticacion/registro')
})

router.get('/perfil', (req, res) => {
    res.render('autenticacion/perfil')
})

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/egresados/p/informacion-basica',
    failureRedirect: '/registro',
    failureFlash: true
}))

router.post('/signin', passport.authenticate('local.signin',{
    successRedirect: '/perfil',
    failureRedirect: '/login',
    failureFlash: 'Contraseña incorrecta'
}))

module.exports = router