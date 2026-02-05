const express = require("express");
const router = express.Router();

const { getAbout, updateAbout, createAbout, deleteAbout } = require("../controllers/aboutcontroller");

// About routes
router.post("/newabout", createAbout);
router.get("/", getAbout);
router.put("/updateabout", updateAbout);
router.delete("/deleteabout/:id", deleteAbout);

module.exports = router;