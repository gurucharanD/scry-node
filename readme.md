# Folder structure

You will find three things in this repo , two directories that contain angular, node apps and a Docker compose file.

# Running Angular app

Pretty straight forward , just cd into angular-app , run ``` npm install ``` and run ``` ng serve ```.
App runs at localhost:4200.
The Paginator component you see in this app is a npm package developed by me and can be found @ [npm](https://www.npmjs.com/package/ng-paginator-plus) , [Git](https://github.com/gurucharanD/ng-paginator)

# Running Node app

Node server is dockerised ,(I did this just to save the overhead of installing mongodb on my machine , setting up environment etc ).
You will need Docker installed on your machine with volumes enabled to be able to run this. cd into node-app and run ``` docker-compose up --build ``` , this spins up a node server and mongodb containers . Loading data into DB is also taken care programmatically. Server runs at port 3000.


