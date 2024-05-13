const express = require('express');
const mongoose = require('mongoose');
const route= require('./routes/routes');
const cors = require('cors');
const server = express();
const dotenv = require('dotenv');
dotenv.config()
const mongodbUrl = process.env.dbUrl

server.use(cors({
    origin: "http://localhost:5174"
}));



server.use(express.json());
server.use(route);

mongoose.connect(mongodbUrl)

const db= mongoose.connection;
db.on('error', err => console.log("not connected to db"))

db.once('open',()=>{
    console.log("connected successfully to db")
})



server.listen(8001, function check(error){
    if(error){
        console.log("Error at the port");
    }else{
        console.log("Startedddddd");
    }
});

