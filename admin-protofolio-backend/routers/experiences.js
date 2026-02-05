const express = require("express");
const router = express.Router();

const {
  createExperience,
  listExperiences,
  getExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experiencecontroller");

// Experience routes
router.get("/", listExperiences);
router.post("/newexperiences", createExperience);
router.get("/getexperiences/:id", getExperience);
router.put("/updateexperiences/:id", updateExperience);
router.delete("/deleteexperiences/:id", deleteExperience);

module.exports = router;