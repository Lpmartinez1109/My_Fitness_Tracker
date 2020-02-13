const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://fitness_tracker:marvel4life@ds147520.mlab.com:47520/heroku_kg2q12mk", {
  useNewUrlParser: true,
});

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});