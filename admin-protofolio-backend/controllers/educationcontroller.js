const Education = require('../models/edcation');

// educationcontroller.js


// Get all education records
exports.listEducations = async (req, res) => {
    try {
        const educationRecords = await Education.find();
        res.status(200).json(educationRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get education by ID
exports.getEducation = async (req, res) => {
    try {
        const education = await Education.findById(req.params.id);
        if (!education) return res.status(404).json({ message: 'Education not found' });
        res.status(200).json(education);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new education record
exports.createEducation = async (req, res) => {
    const education = new Education(req.body);
    try {
        const savedEducation = await education.save();
        res.status(201).json(savedEducation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an education record
exports.updateEducation = async (req, res) => {
    try {
        const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedEducation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an education record
exports.deleteEducation = async (req, res) => {
    try {
        await Education.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};