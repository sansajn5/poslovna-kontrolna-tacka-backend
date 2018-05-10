const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema
const City = require('./city')

const CountrySchema = new Schema({
  mark: {
    type: String,
    required: true,
    unique: true,
    default: ''
  },
  name: {
    type: String,
    required: true,
    unique: true,
    default: ''
  },
  cities: [{
    type: Schema.Types.ObjectId,
    ref: 'City'
  }]
})

CountrySchema.post('remove', country => {
  City.find( {'country': country._id} , (err, city) => {
    city.forEach(el => el.remove())
  })
})

CountrySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Country', CountrySchema)
