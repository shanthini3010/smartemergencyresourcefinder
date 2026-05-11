const router = require("express").Router();
const User = require("../models/User");

// Register
router.post("/register", async (req,res)=>{

const user = new User(req.body);

await user.save();

res.json({message:"User Registered Successfully"});

});

// Login
router.post("/login", async (req,res)=>{

const user = await User.findOne({
email:req.body.email,
password:req.body.password
});

if(user){
res.json({message:"Login Successful"});
}
else{
res.json({message:"Invalid Email or Password"});
}

});

module.exports = router;