const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

require('dotenv').config()

//Setup database
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_CONNECTION_STRING)

//Controllers
const crudController = require('./src/contollers/crudController')

const defaultPort = 8001
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json({type: 'application/json'}))

// Set CORS security headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*') // Will change to actual Internal network IP
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    next()
})

//routes
app.route('/countries').get(crudController.getCountries)
app.route('/countries').post(crudController.createCountry)
app.route('/countries/:id').delete(crudController.deleteCountry)
app.route('/countries/:id').put(crudController.editCountry)
app.route('/cities').get(crudController.getCities)
app.route('/countries/:mark/cities').get(crudController.getCitiesForCountry)
app.route('/cities/:id').delete(crudController.deleteCity)
app.route('/countries/:mark/cities/:id').delete(crudController.deleteCity)
app.route('/cities').post(crudController.addCity)
app.route('/countries/:mark/cities').post(crudController.addCity)
app.route('/cities/:id').put(crudController.editCity)
app.route('/countries/:mark/cities/:id').put(crudController.editCity)

app.listen(process.env.PORT || defaultPort, () => {
    console.log(`Application is running on port ${defaultPort}`)
})

module.exports = app