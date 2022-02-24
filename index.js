
const mongoose = require('mongoose');
var app = require('./app')


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/agua')
        .then(() => {
            console.log("conexion a la base de datos corriendo en //localhoste:27017");
            app.listen(5000, ()=>{
                console.log("sistema corriendo en localhost:5000");
            })
        })
        .catch( error => console.log(error));


        
            
        