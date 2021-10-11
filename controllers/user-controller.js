const path = require("path");
const view = __dirname + "/../views/";
const db = require("../data/db.json");

module.exports = {
  data: (req, res) => {
    res.json(db);
  },
  kirimData: (req, res, next) => {
    try {
      const user = req.body.username;
      const pass = req.body.password;

      const isExist = db.find((data) => {
        return data.username === user;
      });

      if (!isExist) {
        return res.status(404).json({
          message: "Akses di tolak, Username tidak tersedia!",
        });
      }

      if (isExist.password !== pass) {
        return res.status(401).json({
          message: "Password salah, silakkan isi dengan password yang benar!",
        });
      }

      user.map((user) => {
        console.log(user);
      });

      return res.status(200).sendFile(path.join(view + "landing.html"));
    } catch (error) {
      throw {
        message: error.message,
        code: 500,
      };
    }
  },
};
