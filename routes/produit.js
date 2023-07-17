const bodyparser = require("body-parser");
const produitController = require("../controller/produitController");
const express = require("express");
const router = express.Router();


router.post("/", produitController.add);

router.get("/", produitController.getAll); 

router.delete("/:id", produitController.del);

router.put("/:id", produitController.update);

router.get("/:id", produitController.getById);

module.exports = router;
