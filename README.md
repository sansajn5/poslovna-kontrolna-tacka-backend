# Poslovna API

### How to start app

#### Step 1 - Starting backend via docker-compose
```
Require docker on PC
docker-compose up
```

#### Step 2 - Start seeder
```
docker exec -it poslovna_backend_api_1 /bin/bash
node db/seeds/citiesSeeders.js
node db/seeds/countriesSeeder.js
```

#### Step 3 - Start backend
```  
npm start
```