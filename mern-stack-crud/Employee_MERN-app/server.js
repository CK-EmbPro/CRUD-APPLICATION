const express = require('express');
const mongoose = require('mongoose');
const route= require('./routes/routes');
const cors = require('cors');
const server = express();

server.use(cors({
    origin: "http://localhost:5173"
}));

server.use(express.json());
server.use(route);

mongoose.connect("mongodb://127.0.0.1:27017/MERN-Crud-app", {useNewUrlParser: true, useUnifiedTopology: true})

const db= mongoose.connection;
db.on('error', err => console.log("not connected to db"))

db.once('open',()=>{
    console.log("connected successfully to db")
})



server.listen(8000, function check(error){
    if(error){
        console.log("Error at the port");
    }else{
        console.log("Startedddddd");
    }
});

