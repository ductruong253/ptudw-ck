let express = require('express')
let router = express.Router()
let bookingController = require('../controllers/bookingController')

router.post('/', (req, res, next) => {
    let booking = {
        name: req.body.name,
        date: req.body.date,
        email: req.body.email,
        time: req.body.time,
        phone: req.body.phone,
        people: parseInt(req.body.people),
        message: req.body.message
    }
    bookingController.add(booking)
    .then(data => {
        res.redirect('/', { isOk: true})
    })
    .catch(error => next(error))
})


module.exports = router;