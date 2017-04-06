const app = require("express")();
const session = require("express-session");

const routes = require("./routes");

//app.use("/", routes.home);

module.exports = app;
