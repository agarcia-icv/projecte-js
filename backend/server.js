const mongoose = require("mongoose");
const app = require("./app");

const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/moviesDB")
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });