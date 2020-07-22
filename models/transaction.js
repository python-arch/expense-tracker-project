const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  text: {
    type: String,
    required: [true, "please add some text"],
    trim: true,
  },
  amount: {
    type: Number,
    required: [true, "please add a positive or negative number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("transaction", TransactionSchema);

module.exports = Transaction;
