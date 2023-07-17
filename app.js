const express = require('express');
const http = require('http')
const mongo = require('mongoose'); 
const mongoconnection = require('./config/mongoconnection.json'); 
const bodyParser = require("body-parser")
var path = require("path");
const {add} = require("./controller/chatController")


// =========   DATABASE ============
mongo.connect(mongoconnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DataBase Connected");
    })
    .catch((err) => {
        console.log(err);
    });



var app = express();

// ========== MIDDLEWARES ==========
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





// ======== ROUTES =================

var abonneRouter = require("./routes/produit");
app.use("/produit", produitRouter);    
// ======== SERVER =================

server.listen(3000, () => console.log('server'))
