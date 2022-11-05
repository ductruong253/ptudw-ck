let controller = {}
let models = require('../models')
let Food = models.Food
let Sequelize = require('sequelize');
const { query } = require('express');
let Op = Sequelize.Op;

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'summary', 'price'],
            where: {}
        }
        
        if (query.search != '') {
            options.where = {
                [Op.or]: [
                    { title: { [Op.iLike]: `%${query.search}%` }},
                    { description: { [Op.iLike]: `%${query.search}%` }}
                ]
            }
        }
        Food.findAll(options)
            .then(data => {
                console.log(data)
                resolve(data)}
                )
            .catch(error => reject(new Error(error)));
    })
}

module.exports = controller;