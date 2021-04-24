const passport = require('passport')
const Strategy = require('passport-local').Strategy
const user = require('../models/autenticacion')
const helpers = require('../lib/helpers')

passport.use('local.signin', new Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
    }, async (req, username, password, done) => {
        const usuario = await user.findOne({
            where: {
                email: username
            }
        }).then(usr => {
            console.log('usuario ', usr)
            if (usr) {
                const validPassword = helpers.matchPassword(password, usr.password)
                console.log(validPassword)

                if (validPassword) {
                   return done(null, usr, req.flash('success', 'Bienvenido'))
                } /*else {
                   return done(null, false, req.flash('message', 'Password Incorrecto'))
                }*/
                console.log('incorrect password')

            } else {
                return done(null, false, req.flash('message', 'Usuario no esta registrado'))
            }
        })
}))


passport.use('local.signup', new Strategy({
    usernameField: 'username',
    passwordField: 'password1',
    passReqToCallback: true,
    session: false
}, async (req, username, password, done) => {
    const newUser = {
        username,
        password
    }

    newUser.password = await helpers.encryptPassword(password)
    user.create({
        email: newUser.username,
        password: newUser.password
    }).then(usr => {
        return done(null, usr)
    }).catch(error => {
        console.log(error)
    })

}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const usuario = await user.findOne({
        where: {
            id: id
        }
    }).catch(error => {
        console.log(error)
    })
    //console.log(usuario)
    done(null, usuario)
})
