const Certificate = require('../models/certification');

// certifcatescontroller.js

exports.getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ updatedAt: -1 });
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get certificate by ID
exports.getCertificateById = async (req, res) => {
    try {
        const certificate = await Certificate.findById(req.params.id);
        if (!certificate) return res.status(404).json({ message: 'Certificate not found' });
        res.status(200).json(certificate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create certificate
exports.createCertificate = async (req, res) => {
    const { title, issuer, images, date } = req.body;
    const certificate = new Certificate({ title, issuer, images, date });
    try {
        const savedCertificate = await certificate.save();
        res.status(201).json(savedCertificate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update certificate
exports.updateCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!certificate) return res.status(404).json({ message: 'Certificate not found' });
        res.status(200).json(certificate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete certificate
exports.deleteCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.findByIdAndDelete(req.params.id);
        if (!certificate) return res.status(404).json({ message: 'Certificate not found' });
        res.status(200).json({ message: 'Certificate deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

