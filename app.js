const express = require('express');
const http = require('http');
const mongoconnection = require('./config/mongoconnection.json'); 
const bodyParser = require("body-parser")
var path = require("path"); 
const mongoose = require("mongoose");


var app = express();

// =========   DATABASE ============
const MONGODB_URI =
  "mongodb+srv://abdelaziz:E5rYiu1yFAFF1jUU@cluster0.m5hcwfc.mongodb.net/?retryWrites=true&w=majority";
const DB_NAME = "accreditation";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: DB_NAME,
  })
  .then(() => {
    console.log("MongoDB Atlas Connected");
    // Additional code or server setup can be added here
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });




// ========== MIDDLEWARES ==========
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





// ======== ROUTES =================
var produitRouter = require("./routes/produit");
app.use("/produit", produitRouter);   



// ======== SERVER =================
const server = http.createServer(app);
server.listen(5000, () => console.log('server'))
