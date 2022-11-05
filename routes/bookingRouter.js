const router = require('express').Router();
const bookingController = require('../controllers/bookingController')

router.post('/', (req, res, next) => {
    const { currentMenu, ...booking } = req.body
    bookingController.createBooking(booking)
        .then(() => {
            res.redirect(`/?success=true&currentMenu=${currentMenu}`)
        })
        .catch(error => {
            next(error)
        })
})

module.exports = router