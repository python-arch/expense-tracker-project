const express = require("express");
const dotnev = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const transaction = require("./routes/transaction");

dotnev.config({ path: "./config/config.env" });

app.use(express.json());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transaction);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

//  connect to the database

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log(
      `connection has been made successfully : ${mongoose.connection.host}`
    );
  })
  .on("error", (error) => console.log("error : " + error));

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
