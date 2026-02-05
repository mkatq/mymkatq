const express = require("express");
const router = express.Router();

const {
  createEducation,
  listEducations,
  getEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationcontroller");

// Education routes
router.get("/", listEducations);
router.post("/neweducations", createEducation);
router.get("/geteducations/:id", getEducation);
router.put("/updateeducations/:id", updateEducation);
router.delete("/deleteeducations/:id", deleteEducation);

module.exports = router;