const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Movies API running");
});

const movieRoutes = require("./routes/movies");

app.use("/movies", movieRoutes);

module.exports = app;