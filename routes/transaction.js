const express = require("express");
const {
  getTransaction,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transaction-controller");
const Router = express.Router();

Router.route("/").get(getTransaction);
Router.route("/").post(addTransaction);
Router.route("/:id").delete(deleteTransaction);

module.exports = Router;
