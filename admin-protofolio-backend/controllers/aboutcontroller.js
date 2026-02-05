const About = require('../models/about');

// Get about information
exports.getAbout = async (req, res) => {
    try {
        const about = await About.findOne();
        if (!about) {
            return res.status(404).json({ message: 'About information not found' });
        }
        res.status(200).json(about);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create about information
exports.createAbout = async (req, res) => {
    const {description, email, phone, github, linkedin} = req.body;
    try {
        const about = new About({description, email, phone, github, linkedin});
        const savedAbout = await about.save();
        res.status(201).json(savedAbout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update about information
exports.updateAbout = async (req, res) => {
    try {
        const about = await About.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.status(200).json(about);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete about information
exports.deleteAbout = async (req, res) => {
    try {
        await About.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'About deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

