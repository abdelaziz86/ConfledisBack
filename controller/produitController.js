const Abonne = require("../models/produit");
const express = require("express");
const { io } = require("../app");



const getAll = (req, res, next) => {
  try {
    Abonne.find({}).then((result) => {
      console.log("test");
    io.emit("msg", "all users are searched.");
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};
 



const add = async (req, res, next) => {
  console.log("abonne : " + req.body);
  try {
    const abonne = new Abonne(req.body);
    await abonne.save();
    io.emit("msg", "abonne added.");
    res.send("abonne added successfully");
  } catch (err) {
    res.send(err);
  }
};


const del = async (req, res, next) => {
  try {
    //await User.findOneAndDelete({_id: req.params.id })
    await Abonne.findByIdAndDelete(req.params.id);
    io.emit("msg", req.params.id +"has been deleted");
    res.send("abonne deleted");
  } catch (err) {
    console.log(err);
  }
};

const update = async (req, res, next) => {
  try {
    const user = new Abonne(req.body);
    //User.findByIdAndUpdate(req.params.id, req.body, {new : true})
    await Abonne.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.send("abonne modified done");
  } catch (err) {
    res.send(err);
  }
};

const getById = async (req, res, next) => {
  try {
    await Abonne.findById(req.params.id).then((result) => {
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};


module.exports = { add , getAll, del, update, getById }; 
