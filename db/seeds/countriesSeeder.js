const seeder = require('mongoose-seed')

require('dotenv').config() // Setup .env configuration file

seeder.connect(process.env.DB_CONNECTION_STRING, () => {
  seeder.loadModels([
    `${__dirname}/../../src/models/country.js`
  ])
  seeder.clearModels(['Country'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect()
    })
  })
})

const data = [
  { 
    "model": "Country", 
    "documents": 
    [
      {
        "mark":"SRB",
        "name":"Serbia",
        "cities": []
      },
      {
        "mark":"CRO",
        "name":"Croatia",
        "cities": []
      },
      {
        "mark":"MNE",
        "name":"Montenegro",
        "cities": []
      },
      {
        "mark":"BiH",
        "name":"Bosnia and Hercegovina",
        "cities": []
      },
      {
        "mark":"ROM",
        "name":"Romania",
        "cities": []
      }
    ]
  }
]
