//################################## Configurations for Mongoose-Mongo DB ####################################################
//External Modules
const express = require('express');
const bodyParser = require('body-parser');  
const path = require('path');


// MongoDb modules
const mongoose = require('mongoose');

// MongoDB Models;
const Routes = require('./loginroutes');
const app = express();
//const Routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', 'views/ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'static'))); 

app.use(Routes)
console.log (__dirname, 'ABC')

mongoose.connect('mongodb+srv://RNGPIT:RNGPIT@cluster0.xymb2.mongodb.net/Recruitment',{ useUnifiedTopology:true, useNewUrlParser:true})
        .then(()=>{
            app.listen(3000);
        })
        .catch(err => console.log(err));