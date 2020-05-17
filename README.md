# 24g-micro-project
Vues.js and Node(express) powered micro-website for playing videos with scalability in mind and n-tier architecture in mind


#  Schema Setup Instruction: Schema Folder
## Kindly follow the following instructions to setup
* Create a schema with name **moviesdb24g** and 2 collections **videos and users**
* Open **schema** folder
* Open **db_populate** folder and import **users.json** and **videos.json** into their respective collections
* All other collections will be automatically created when the server is started and an API call is made


## Reference
* 24g_schema.pdf contains the ERDiagram of the system for reference purpose
* scripts folder contains .js scripts for all the collections for reference purpose 


# System Setup Instruction: 24g-micro-project folder
## Kindly follow the following instructions to setup the system 
* Open **24g-micro-project** folder with a code editor
* Run _npm install_ 


# Server Setup Instruction: 24g-micro-project/server
## Kindly follow the following instructions to setup the Express API
* Open **24g-micro-project/server** folder with a code editor
* Run _npm run devStart_ 


## Server Reference
* **http.http** contains all the rest API endpoints for testing
* You can download **REST Client** on vs code or use **POSTMAN** to test the API endpoints 
* **access.log** contains all the system log  


# Client Setup Instruction: 24g-micro-project/client
## Kindly follow the following instructions to setup the Vue.js frontend
* Open **24g-micro-project/client** folder with a code editor
* Run _npm install_ 
* Run _npm run start_ 


# Deployment Setup Instruction
## Kindly take note of the following for deploying the application
* The system has already been built and the public folder is pointed to the server folder


_Thank **YOU** for reading me... System is ready to be used_
