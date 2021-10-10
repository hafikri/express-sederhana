const express = require("express");
const router = express.Router();
const path = require("path");
const view = __dirname + "/../views/";

router.get("/404", (req, res) => {
  res.sendFile(path.join(view + "404.html"));
});

module.exports = router;
