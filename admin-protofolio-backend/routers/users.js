const express = require("express");
const router = express.Router();

const {
  createUser,
  updateUser,
  getUser,
  deleteUser,
} = require("../controllers/usercontroller");

// User routes
router.post("/newusers", createUser);
router.get("/getusers/:id", getUser);
router.put("/updateusers/:id", updateUser);
router.delete("/deleteusers/:id", deleteUser);

module.exports = router;