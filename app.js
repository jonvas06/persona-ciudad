const express = require("express");
const cors = require('cors')
const config = require("config");
const dbConnection = require("./model/db-connection/mongodb.js");
const personRouter = require("./routes/person.routes.js");
const cityRouter = require("./routes/city.routes")

const app = express();

//DB Connnection
dbConnection();

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

//middlewares
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
personRouter(app);
cityRouter(app);
app.get("/api/v1/", function (req, res) {
  res.send("Home page");
});

app.listen(config.get("server-port") || 3000);
