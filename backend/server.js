const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const donorRoutes = require("./routes/donors");
const patientRoutes = require("./routes/patients");
const authRoutes = require("./routes/auth");
const resourceRoutes = require("./routes/resources");
const organRoutes = require("./routes/organRoutes");

const app = express();   // ✅ app must be created first

/* Middleware */

app.use(cors());
app.use(express.json());

/* Routes */

app.use("/donors", donorRoutes);
app.use("/patients", patientRoutes);
app.use("/auth", authRoutes);
app.use("/resources", resourceRoutes);
app.use("/organs", organRoutes);   // ✅ now correct

/* MongoDB Connection */

mongoose.connect("mongodb://localhost:27017/emergencyDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* Test Route */

app.get("/", (req,res)=>{
res.send("Smart Emergency Resource Finder API Running");
});

/* Start Server */

app.listen(5000, ()=>{
console.log("Server running on port 5000");
});