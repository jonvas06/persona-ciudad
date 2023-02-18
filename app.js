const express = require("express");
const config = require("config");
const dbConnection = require("./model/db-connection/mongodb.js");
const personRouter = require("./routes/person.routes.js");

const app = express();

//DB Connnection
dbConnection();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
personRouter(app);
app.get("/api/v1/", function (req, res) {
  res.send("Home page");
});

app.listen(config.get("server-port") || 3000);
