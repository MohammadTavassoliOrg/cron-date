## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Postman Documention

Import link: https://www.getpostman.com/collections/ccbc70e8c2fefe0423f6

## Docker 
```bash
# build image
$ docker build -t cron:v1 .

# watch mode
$ docker run -itd --name cron --network=host cron:v1 

# if app is not running
$ docker exec -it cron npm start:dev
```
NOTE: before running app in docker you need to setup database on your computer

## Setup Database
```bash
# setup prisma
$ npx prisma migrate dev --name init
```

