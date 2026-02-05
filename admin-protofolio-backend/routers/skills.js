const express = require("express");
const router = express.Router();

const {
  createSkill,
  listSkills,
  getSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillcontroller");

// Skill routes
router.get("/", listSkills);
router.post("/newskills", createSkill);
router.get("/getskills/:id", getSkill);
router.put("/updateskills/:id", updateSkill);
router.delete("/deleteskills/:id", deleteSkill);

module.exports = router;