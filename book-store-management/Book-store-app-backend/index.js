const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes')
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config();

const app = express();
const port = process.env.port
const mongodbUrl = process.env.dbUrl
//Middlewares

app.use(cors({origin:'*', credentials: true})); 
app.use(express.json());
app.use('/',router);

mongoose.connect(mongodbUrl)
.then(()=>{
    console.log("Connected to mongodb successfully")
})
.then(()=>{
    app.listen(8000, ()=>{
        console.log(`server listening at http://localhost:${port}`)
    })
})
.catch(err=> console.log(err));