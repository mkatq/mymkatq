const express = require("express");
const router = express.Router();

const {
  listProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectcontroller");

// Project routes
router.get("/", listProjects);
router.post("/newprojects", createProject);
router.get("/getprojects/:id", getProject);
router.put("/updateprojects/:id", updateProject);
router.delete("/deleteprojects/:id", deleteProject);

module.exports = router;