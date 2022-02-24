const express = require('express');
const app = express();
const path =require('path')
var bodyParser = require("body-parser")

var project_router = require('./routes/router')

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());

//ruta para views ejs

app.set('view engine', 'ejs')

//static files
app.use(express.static(path.join(__dirname, 'public')))





//llamar router

app.use('/', project_router)

module.exports = app;