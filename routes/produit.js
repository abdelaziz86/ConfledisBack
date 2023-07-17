const bodyparser = require("body-parser");
const AController = require("../controller/produitController");
const express = require("express");
const router = express.Router();


router.post("/add", AController.add);

router.get("/all", AController.getAll); 

router.delete("/delete/:id", AController.del);

router.put("/update/:id", AController.update);

router.get("/getById/:id", AController.getById);

module.exports = router;
