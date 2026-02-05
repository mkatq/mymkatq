const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    issuer : {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: null
    },
    images: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Certification', certificationSchema);