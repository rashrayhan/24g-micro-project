require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require ('mongoose');
const db = process.env.DATABASE_URL || 'mongodb://localhost:27017/moviesdb24g';
const port = process.env.port || 4600;
const fs = require("fs");
const path = require("path");
const morgan = require('morgan');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = swaggerJSDoc(require('./middlewares/swagger'));

const app = express();

//Middlewares 
app.use(express.json());
app.use(cors());
app.use(helmet());
//logging to file
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
//swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); 


//Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/videos', require('./routes/videoRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));
app.use('/api/sentiments', require('./routes/sentimentRoutes'));


//Production Environment
if(process.env.NODE_ENV === 'production'){
    //static folder
    app.use(express.static(__dirname + '/public/'));

    //SPA General Routing
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

mongoose.connect(db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false })
.then(() => {
    app.listen(port, () => {
        console.log(`${db} Connected \nApp is running on port: ${port}`)
    })
})
.catch((err) => {
    console.log(err);
});