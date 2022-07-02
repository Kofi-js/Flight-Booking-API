const express = require("express");
const connectDB = require("./db");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/flight");
const routes = require("./routes/flightRoute");
require("dotenv").config();

connectDB();

const app = express();

app.use(json());

const port = process.env.PORT;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
