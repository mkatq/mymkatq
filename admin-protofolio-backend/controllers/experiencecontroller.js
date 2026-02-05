const Experience = require('../models/experience');

// Get all experiences
exports.listExperiences = async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get experience by ID
exports.getExperience = async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id);
        if (!experience) return res.status(404).json({ message: 'Experience not found' });
        res.status(200).json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new experience
exports.createExperience = async (req, res) => {
    const experience = new Experience(req.body);
    try {
        const savedExperience = await experience.save();
        res.status(201).json(savedExperience);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an experience
exports.updateExperience = async (req, res) => {
    try {
        const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedExperience);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an experience
exports.deleteExperience = async (req, res) => {
    try {
        await Experience.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};