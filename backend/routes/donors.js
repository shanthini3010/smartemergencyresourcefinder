const router = require("express").Router();
const Donor = require("../models/Donor");

// Get all donors
router.get("/", async (req, res) => {
  const donors = await Donor.find();
  res.json(donors);
});

// Add donor
router.post("/", async (req, res) => {
  const donor = new Donor(req.body);
  await donor.save();
  res.json(donor);
});

router.get("/search/:bloodGroup", async (req, res) => {

const bloodGroup = req.params.bloodGroup;

const donors = await Donor.find({ bloodGroup: bloodGroup });

res.json(donors);

});

module.exports = router;