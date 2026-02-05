const express = require("express");
const router = express.Router();
const aboutRouter = require("./routers/about");
const userRouter = require("./routers/users");
const educationRouter = require("./routers/educations");
const certificateRouter = require("./routers/certificates");
const skillRouter = require("./routers/skills");
const projectRouter = require("./routers/projects");
const experienceRouter = require("./routers/experiences");



// Mounting routers
router.use("/about", aboutRouter);
router.use("/users", userRouter);
router.use("/educations", educationRouter);
router.use("/certificates", certificateRouter);
router.use("/skills", skillRouter);
router.use("/projects", projectRouter);
router.use("/experiences", experienceRouter);

// Example routes
router.get("/", (req, res) => {
  res.json({ message: "Welcome to Admin Portfolio API" });
});


module.exports = router;
