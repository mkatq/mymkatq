const express = require("express");
const router = express.Router();

const {
  createCertificate,
  getAllCertificates,
  getCertificateById,
  deleteCertificate,
  updateCertificate,
} = require("../controllers/certifcatescontroller");

// Certificate routes
router.get("/", getAllCertificates);
router.post("/newcertificates", createCertificate);
router.get("/getcertificates/:id", getCertificateById);
router.put("/updatecertificates/:id", updateCertificate);
router.delete("/deletecertificates/:id", deleteCertificate);

module.exports = router;