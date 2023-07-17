const bodyparser = require("body-parser");
const produitController = require("../controller/produitController");
const express = require("express");
const router = express.Router();


router.post("/add", produitController.add);

router.get("/all", produitController.getAll); 

router.delete("/delete/:id", produitController.del);

router.put("/update/:id", produitController.update);

router.get("/getById/:id", produitController.getById);

module.exports = router;
