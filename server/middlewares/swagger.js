//API Documentation
const port = process.env.port || 4600;

swaggerOptions ={
    swaggerDefinition: {
         info: {
             "title": "24g Movie App",
             "description": "Vues.js and Node(express) powered micro-website for playing videos",
             "contact": {
                 "name": "Abdulrasheed Mustapha",
                 "email": "abdulrasheedmustapha66@gmail.com"
             },
             server: [port]
         }
    },
    apis: ['../routes/*.js']
 }; 
 
 module.exports = swaggerOptions;