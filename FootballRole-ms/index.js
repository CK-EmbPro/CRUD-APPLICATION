const express = require('express');
const log=require('./Middlewares/log')
const env = require ('./config/env');
const mongoose= require('mongoose')
const homeroute= require('./routes/home')
const app = express()
const port = env.port
const mongodbUrl = env.dbUrl
console.log(port)
const bodyParser = require('body-parser')

// Mongodb connection establishment

mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;


db.on('error',()=>console.log("The connection not established"));
db.once('open', ()=>{console.log("The connection established")});


//End of Mongodbd connection establishment


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/users',log.log);
app.use('/users', homeroute);




app.listen(port , ()=>console.log(`listening on port http://localhost:${port}/users`));


