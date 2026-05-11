const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
    name: String,
    type: String,
    location: String,
    phone: String
});

module.exports = mongoose.model("Resource", ResourceSchema);