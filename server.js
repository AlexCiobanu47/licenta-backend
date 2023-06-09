require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
//
require("./controllers/readingController");
const readingRoutes = require("./routes/readingRoutes");
//
//express app
const app = express();
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.next, req.method);
  next();
});
//routes
app.use("/api", readingRoutes);
// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to the database and listening on port: ",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
