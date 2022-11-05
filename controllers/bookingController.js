const models = require('../models')
const Booking = models.Booking

module.exports = {
    createBooking(booking) {
        return Booking.create(booking)
    }
}