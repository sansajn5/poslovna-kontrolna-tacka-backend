const dbService = require('../services/dbService')

const getCountries = (req, res, next) => {
    dbService.getCountries()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
}

const createCountry = (req, res, next) => {
    dbService.createCountry(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
}

const deleteCountry = (req, res, next) => {
    const id = req.params.id
    dbService.deleteCountry(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
}

const editCountry = (req, res, next) => {
    const id = req.params.id
    dbService.updateCountry(id, req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
}

const getCities = (req, res, next) => {
    dbService.getCities()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
}

const getCitiesForCountry = (req, res, next) => {
    dbService.getCitiesByCountry(req.params.mark)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
}

const deleteCity = (req, res, next) => {
    dbService.deleteCity(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
}

const addCity = (req, res, next) => {
    dbService.addCity(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
}

const editCity = (req, res, next) => {
    const id = req.params.id
    dbService.updateCity(id, req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
}

module.exports = {
    getCountries,
    createCountry,
    deleteCountry,
    editCountry,
    getCities,
    getCitiesForCountry,
    deleteCity,
    addCity,
    editCity
}