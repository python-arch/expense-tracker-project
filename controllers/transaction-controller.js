const Transaction = require("../models/transaction");

// @desc GET all transactions
// @route /api/v1/transactions
// @access Public

module.exports.getTransaction = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc  Add transaction
// @route /api/v1/transactions
// @access Public

module.exports.addTransaction = async (req, res, next) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    console.log(req);
    return res.status(201).json({
      success: true,
      data: newTransaction,
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(500).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server error",
      });
    }
  }
};

// @desc  delete transaction
// @route /api/v1/transactions:id
// @access Public

module.exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(400).json({
        success: false,
        error: "transaction not found",
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
