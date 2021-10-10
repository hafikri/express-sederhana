const express = require("express");
const { data } = require("../controllers/user-controller");
const router = express.Router();

const userController = require("../controllers/user-controller");

router.route("/login").get(userController.data).post(userController.kirimData);

module.exports = router;
