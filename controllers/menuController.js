const models = require('../models')
const Menu = models.Menu
const Food = models.Food

module.exports = {
    getAll(email){
        return Menu.findAll()
    },
    getFoods() {
        return Food.findAll({
            include: [
                {
                    model: Menu,
                    attributes: ['name']
                }
            ]
        })
    }
}