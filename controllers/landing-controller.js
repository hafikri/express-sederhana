const path = require("path");
const view = __dirname + "/../views/";

module.exports = {
  landing: (req, res, next) => {
    res.sendFile(path.join(view + "landing.html"));
  },
};
