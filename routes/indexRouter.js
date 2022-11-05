let express = require('express')
let router = express.Router()
let menuController = require('../controllers/menuController')

router.get('/', (req, res, next) => {
    if ((req.query.search == null) || (req.query.search.trim() == '')) {
        req.query.search = '';
    }
    menuController.getAll(req.query)
        .then(menus => {
            res.locals.menus = menus
            return res.render('index')
        })
        .catch(err => next(err))
})


module.exports = router;