const objectFilter = require('../utils/objectFilter')
const Countries = require('../models/country')
const Cities = require('../models/city')

const getCountry = async (id) => {
    try {
        let country = await Countries.findById(id)
        return Promise.resolve(country)
    } catch (err) {
        Promise.reject(err)
    }
}

const getCity = async (id) => {
    try {
        let city = await Cities.findById(id)
        return Promise.resolve(city)
    } catch (err) {
        Promise.reject(err)
    }
}

const addCityToCountry = async (data) => {
    try {
        const country = await Countries.findById(data.id)
        const city = new city({name: data.name, postalCode: data.postalCode, country: data.id});
        city.save()
        country.cities.push(city)
        country.save()
        return Countries.findOne(data.id).exec()
    } catch(err) {
        Promise.reject(err)
    }
}

const getCountries = async () => {
    try {
        let countries = await Countries.find()
        return Promise.resolve(countries)
    } catch (err) {
        Promise.reject(err)
    }
}

const createCountry = async (data) => {
    try {
        const country = new Countries({mark: data.mark, name: data.name, cities: []})
        country.save();
        return Countries.find({mark: data.mark}).exec()
    } catch(err) {
        Promise.reject(err)
    }
}

const deleteCountry = async (data) => {
    try {
        const country = await Countries.findById(data)
        Cities.remove({country: data})
        country.remove();
        return Promise.resolve({message: 'Deleted country'})
    } catch (err) {
        Promise.reject(err)
    }
}

const updateCountry = async (id, data) => {
    try {
        const country = await Countries.findOneAndUpdate({
            _id: id
        }, data).exec()
        if (!country) {
            return Promise.reject(new Error('Country with that properties does not exist'))
        }
        return Countries.findOne({
            id
        }).exec()
    } catch (err) {
        Promise.reject(err)
    }
}

const getCities = async () => {
    try {
        let cities = await Cities.find()
        return Promise.resolve(cities)
    } catch (err) {
        Promise.reject(err)
    }
}

const getCitiesByCountry = async (mark) => {
    try {
        let con = await Countries.findOne({mark: mark})
        let id = con._id
        let cities = await Cities.find( {country: id} )
        return Promise.resolve(cities)
    } catch (err) {
        Promise.reject(err)
    }
}

const deleteCity = async (id) => {
    try {
        const city = await Cities.findById(id)
        let country = await Countries.findById(city.country)
        country.cities.pull(city._id);
        country.save()
        city.remove()
        return Promise.resolve({message:'deleted'})
    }catch(err) {
        Promise.reject(err)
    }
}

const addCity = async (data) => {
    try {
        const city = new Cities({name: data.name, postalCode: data.postalCode, country: data.country});
        const country = await Countries.findById(data.country)
        city.save()
        country.cities.push(city)
        country.save()
        return Promise.resolve({message: 'added country'})
    } catch (err) {
        Promise.reject(err)
    }
}

const updateCity = async (id, data) => {
    try {
        const city = await Cities.findOneAndUpdate({
            _id: id
        }, data).exec()
        if (!city) {
            return Promise.reject(new Error('Country with that properties does not exist'))
        }
        return Cities.findOne({
            id
        }).exec()
    } catch (err) {
        Promise.reject(err)
    }
}

module.exports = { 
    getCountry,
    getCity,
    addCityToCountry,
    getCountries, 
    createCountry,
    deleteCountry,
    updateCountry,
    getCities , 
    getCitiesByCountry,
    deleteCity,
    addCity,
    updateCity
}