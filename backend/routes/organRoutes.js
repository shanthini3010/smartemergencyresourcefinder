const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const OrganSchema = new mongoose.Schema({
name:String,
organ:String,
phone:String,
location:String
});

const OrganDonor = mongoose.model("OrganDonor", OrganSchema);

router.post("/", async (req,res)=>{

const donor = new OrganDonor(req.body);

await donor.save();

res.json({message:"Organ donor saved"});

});

module.exports = router;