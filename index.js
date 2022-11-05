let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'))
//add custom header
let helper = require('./controllers/helper')

let expressHbs = require('express-handlebars')
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        toLowerCase: helper.toLowerCase,
        toFixed2: helper.toFixed2
    }
})
app.engine('hbs',  hbs.engine)
app.set('view engine', 'hbs');

let bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

//root resource
app.use('/', require('./routes/indexRouter'))

app.use('/booking', require('./routes/bookingRouter'))


//sync data resource
app.get('/sync', (req, res) => {
    let models = require('./models/index');
    models.sequelize.sync().then(() => {
        res.send('database sync success!')
    })
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log('Server started')
})