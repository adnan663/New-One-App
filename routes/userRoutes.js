const express = require("express");
const {
  loginController,
  registerController,
} = require("../controller/userController");

const router = express.Router();

// Method -get

router.post("/login", loginController);

// Method - post

router.post("/register", registerController);

module.exports = router;

// Router
