const router = require('express').Router();
const menuController = require('../controllers/menuController')

router.get('/', (req, res,  next)=>{
    const success = req.query.success
    Promise.all([menuController.getAll(), menuController.getFoods()])
        .then(data => {
            res.locals.menus = data[0]
            res.locals.foods = data[1]
            if (success) {
                res.locals.success = true
            }
            res.render('index')
        })
        .catch(error => {
            next(error)
        })
})

module.exports = router