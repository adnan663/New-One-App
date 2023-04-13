const express = require("express");
const {
  addBillsController,
  getBillsController,
} = require("../controller/billsController");

const router = express.Router();

// Method - post
router.post("/add-bills", addBillsController);

// method- get

router.get("/get-bills", getBillsController);

module.exports = router;
