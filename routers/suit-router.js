const express = require("express");
const router = express.Router();
const suitController = require("../controllers/suit-controller");

router.get("/suitgame", suitController.suit);

module.exports = router;
