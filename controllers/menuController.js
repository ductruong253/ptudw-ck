let controller = {}
let models = require('../models')
let Menu = models.Menu
let Sequelize = require('sequelize');
const { query } = require('express');
let Op = Sequelize.Op;

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name'],
            include: [
                { model: models.Food }
            ],
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
        Menu.findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
}

controller.getByMenuName = (menuName, query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name'],
            include: [
                { model: models.Food }
            ],
            where: {name: menuName}
        }
        
        if (query.search != '') {
            options.where = {
                [Op.or]: [
                    { title: { [Op.iLike]: `%${query.search}%` }},
                    { description: { [Op.iLike]: `%${query.search}%` }}
                ]
            }
        }
        Menu.findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
}

module.exports = controller;