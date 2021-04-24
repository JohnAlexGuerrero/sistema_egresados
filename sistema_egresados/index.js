const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const sequelize = require('./databases/db')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const flash = require('connect-flash')


const app = express()
require('./lib/passport')


//router
const autenticacion = require('./routers/autenticacion')
const indexRouter = require('./routers/index')
const egresadoRouter = require('./routers/egresado')
const conveniosRouter = require('./routers/convenios')
const registroForms = require('./routers/registro')



app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

app.use(session({
    secret: 'my_secret',
    resave: true,
    saveUninitialized: true
}))

//middlewares
app.use(flash())
app.use('/static', express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser('my_secret'))


//variables globales
app.use((req, res, next)=>{
    app.locals.success = req.flash('success')
    next()
})




app.use('/', indexRouter)
app.use('/egresados', egresadoRouter)
app.use('/convenios', conveniosRouter)
app.use('/forms', registroForms)
app.use('/autenticacion', autenticacion)


app.listen(8080, (req, res) => {
    console.log('http://localhost:8080')
    //conectamos a la base de datos
    //Force true: DROP TABLES
    sequelize.sync({ force: true }).then(() => {
        console.log('conexion correcta')
    }).catch(error => {
        console.log('sin conexion con base de datos', error)
    })
})
