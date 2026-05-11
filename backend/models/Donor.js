const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  phone: String,
  location: String
});

module.exports = mongoose.model("Donor", DonorSchema);