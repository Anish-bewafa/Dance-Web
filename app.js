const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//express specific stuff
app.use('/static',express.static('static')) //for serving static files
app.use(express.urlencoded())

//Pug specific stuff
app.set('view engine','pug') //set the template engine as pug
app.set('views',path.join(__dirname,'views')) //set the views directory

//Endpoints
app.get('/',(req,res)=>{
    const params = {};
    res.status(200).render('index.pug',params);

});

//Start the server
app.listen(port, ()=>{
    console.log(`The application started on port ${port}`);
});