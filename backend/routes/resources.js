const router = require("express").Router();
const Resource = require("../models/Resource");

// Get all resources
router.get("/", async (req, res) => {
    const resources = await Resource.find();
    res.json(resources);
});

// Add new resource
router.post("/", async (req, res) => {
    const newResource = new Resource(req.body);
    await newResource.save();
    res.json(newResource);
});

module.exports = router;