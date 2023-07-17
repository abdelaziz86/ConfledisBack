const Produit = require("../models/produit");
const express = require("express"); 



const getAll = (req, res, next) => {
  try {
    Produit.find({}).then((result) => {
      console.log("test"); 
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

const add = async (req, res, next) => {
  console.log("produit: " + req.body);
  try {
    const produit = new Produit(req.body);
    await produit.save(); 
    res.send("Product added successfully");
  } catch (err) {
    res.send(err);
  }
};

const del = async (req, res, next) => {
  try {
    await Produit.findByIdAndDelete(req.params.id); 
    res.send("Product deleted");
  } catch (err) {
    console.log(err);
  }
};

const update = async (req, res, next) => {
  try {
    await Produit.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.send("Product modified done");
  } catch (err) {
    res.send(err);
  }
};

const getById = async (req, res, next) => {
  try {
    await Produit.findById(req.params.id).then((result) => {
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};



module.exports = { add , getAll, del, update, getById }; 
