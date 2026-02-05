const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: true,
      trim: true
    },

    university: {
      type: String,
      required: true,
      trim: true
    },

    graduationDate: {
      type: String,
      required: true
    },

    gpa: {
      type: String,
      default: null
    },

    project: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      features: {
        type: [String],
        default: []
      }
    },

    coursework: {
      type: [String],
      default: []
    },

    awards: {
      type: [String],
      default: []
    },

    clubs: {
      type: [String],
      default: []
    },

    image: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true // auto handles createdAt & updatedAt
  }
);

module.exports = mongoose.model("Education", educationSchema);
