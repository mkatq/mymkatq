const Project = require('../models/project');


//controllers/projectcontroller.js
exports.createProject = async (req, res) => {

  const { title, description, icon, images, technologies,github  } = req.body;
  try {
    const project = new Project({ title, description, icon, images, technologies,github  });
    const savedProject = await project.save();
    return res.status(201).json(savedProject);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    return res.status(200).json(project);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Project not found" });
    return res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.listProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
