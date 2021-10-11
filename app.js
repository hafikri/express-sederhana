require("dotenv").config();

const express = require("express");
const landingRouter = require("./routers/landing-router");
const suitRouter = require("./routers/suit-router");
const p404Router = require("./routers/404-router");
const userRouter = require("./routers/user-router");
const app = express();

const port = process.env.PORT;
const path = require("path");

const public = __dirname + "/publics/";

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(landingRouter);
app.use(suitRouter);
app.use(p404Router);
app.use(userRouter);

app.use("/", express.static(public));

app.use("*", (req, res) => {
  res.status(404).redirect("/404");
});

app.use((err, req, res, next) => {
  const code = err.code;
  const message = err.message;

  return res.status(code).json({
    message: message,
  });
});

app.listen(port, () => {
  console.log(`Server ready on port ${port}`);
});
