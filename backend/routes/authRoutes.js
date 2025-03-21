const express = require("express")
const User = require("../model/User")
const router = express.Router();

router.post("/signup", async (req,res)=>{
    const {name, email, password} = req.body;
    await User.create({name, email, password});
    res.json({success:true})
})

router.post("/login", async (req,res) =>{
    const user = await User.findOne({email: req.body.email, password : req.body.password})
    if(user) res.json({success:true})
    else res.json({success : false})
})

module.exports = router