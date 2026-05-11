const router = require("express").Router();
const Patient = require("../models/Patient");

// Get all patients
router.get("/", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// Add new patient
router.post("/", async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.json(patient);
});

module.exports = router;