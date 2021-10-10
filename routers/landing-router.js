const express = require("express");
const router = express.Router();

const landingController = require("../controllers/landing-controller");

router.get("/landing", landingController.landing);

module.exports = router;
