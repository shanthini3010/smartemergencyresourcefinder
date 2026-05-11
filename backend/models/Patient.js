const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  hospital: String,
  phone: String,
  location: String,
  requiredDate: String
});

module.exports = mongoose.model("Patient", PatientSchema);