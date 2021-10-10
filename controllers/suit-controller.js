const path = require("path");
const view = __dirname + "/../views/";

module.exports = {
  suit: (req, res) => {
    res.sendFile(path.join(view + "suit.html"));
  },
};
