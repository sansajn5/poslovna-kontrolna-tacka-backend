const seeder = require('mongoose-seed')

require('dotenv').config() // Setup .env configuration file

seeder.connect(process.env.DB_CONNECTION_STRING, () => {
  seeder.loadModels([
    `${__dirname}/../../src/models/city.js`
  ])
  seeder.clearModels(['City'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect()
    })
  })
})

const data = [
  { 
    "model": "City", 
    "documents": 
    [
      {
        "name":"Novi Sad",
        "postalCode":"21100",
        "country": '5ae23941a861bc268c584c8a'
      },
      {
        "name":"Petrovaradin",
        "postalCode":"11111",
        "country": '5ae23941a861bc268c584c8a'
      },
      {
        "name":"Beograd",
        "postalCode":"12341",
        "country": '5ae23941a861bc268c584c8a'
      },
      {
        "name":"Nis",
        "postalCode":"42121",
        "country": '5ae23941a861bc268c584c8a'
      },
      {
        "name":"Sid",
        "postalCode":"42132",
        "country": '5ae23941a861bc268c584c8a'
      },
      {
        "name":"Erdevik",
        "postalCode":"61612",
        "country": '5ae23941a861bc268c584c8a'
      },
      {
        "name":"Zagreb",
        "postalCode":"91122",
        "country": "5ae23941a861bc268c584c8b"
      },
      {
        "name":"Split",
        "postalCode":"754745",
        "country": "5ae23941a861bc268c584c8b"
      },
      {
        "name":"Mostar",
        "postalCode":"51243",
        "country": "5ae23941a861bc268c584c8b"
      },
      {
        "name":"Bukurest",
        "postalCode":"002100",
        "country": "5ae23941a861bc268c584c8e"
      },
      {
        "name":"Lopare",
        "postalCode":"22222",
        "country": "5ae23941a861bc268c584c8d"
      },
      {
        "name":"Sarajevo",
        "postalCode":"746643",
        "country": "5ae23941a861bc268c584c8d"
      },
      {
        "name":"Foca",
        "postalCode":"86843",
        "country": "5ae23941a861bc268c584c8d"
      },
      {
        "name":"Budva",
        "postalCode":"4363472",
        "country": "5ae23941a861bc268c584c8c"
      },
      {
        "name":"Herceg Novi",
        "postalCode":"453463",
        "country": "5ae23941a861bc268c584c8c"
      },
      {
        "name":"Kotor",
        "postalCode":"474456",
        "country": "5ae23941a861bc268c584c8c"
      },
      {
        "name":"Dobrota",
        "postalCode":"86958",
        "country": "5ae23941a861bc268c584c8c"
      },
      {
        "name":"Podgorica",
        "postalCode":"123421",
        "country": "5ae23941a861bc268c584c8c"
      }
    ]
  }
]
