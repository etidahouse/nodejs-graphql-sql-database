# nodejs - graphql - sql database

## Init

`npm init -y`  
`yarn add express express-graphql graphql`  
`yarn add @types/express @types/express-graphql @types/graphql nodemon -D`  
`npx tsconfig.json`
`sudo npm install typescript -g`

typeorm and postgresql:  
`yarn add typeorm reflect-metadata pg`

dotenv:  
yarn add dotenv

## Run

`docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres`  
`docker exec -it postgres psql -U postgres -d postgres -c "create database players;"` 

`yarn build`  
`yarn start`  

App deployed at http://localhost:8080

## Test

Hello Wolrd : `{ hello }`  
Player : `{ player { lastName } }`  
