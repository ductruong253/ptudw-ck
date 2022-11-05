const express = require('express')
const exphbs = require('express-handlebars')
const { sequelize } = require('./models/index')

const app = express()
const port = process.env.PORT || 5002

const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowedProtoMethods: true,
        allowProtoPropertiesByDefault: true,
        allowedProtoProperties: true
    }
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/sync', async (req, res) => {
    try {
        await sequelize.sync({force:true})
        res.send('database sync completed')
    } catch (error) {}
})

app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('Server is running at port ' + port)
})
