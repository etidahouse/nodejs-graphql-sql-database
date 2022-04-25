# nodejs - graphql - sql database

## Init

`npm init -y`  
`yarn add express express-graphql graphql`  
`yarn add @types/express @types/express-graphql @types/graphql nodemon -D`  
`npx tsconfig.json`  
`sudo npm install typescript -g`

knex :  
`yarn add knex pg`

dotenv:  
`yarn add dotenv`

## Run

`docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres`  
`docker exec -it postgres psql -U postgres -d postgres -c "create database players;"` 

`yarn build`  
`yarn start`  

App deployed at http://localhost:3010

Watch database :  
`docker run --name pgadmin -d -p 5050:5050 thajeztah/pgadmin4`

## Test

Hello Wolrd : `{ hello }`  
Players : `{ players { id, firstName, lastName } }`  
Get an player `{player(id: 0) {id, firstName, lastName}}`  
Find an player `{find(firstName: "Eti") {lastName}}`  
Count an player name : `{count(firstName: "Eti")}`  
Add an player : `mutation { createPlayer(newPlayer:{firstName: "Eric", lastName: "JC"}) {
  id, lastName
} }`  