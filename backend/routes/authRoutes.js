    const express = require("express")
    const User = require("../model/User")
    const router = express.Router();


    router.post("/login", async (req, res) => {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        
        if (user) {
            res.json({ success: true, user: { _id: user._id, name: user.name, email: user.email } });
        } else {
            res.json({ success: false });
        }
    });
    
    router.get("/users", async (req, res) => {
        try {
            const users = await User.find({}, "name email"); // Fetch only name and email
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
    
    

    router.post("/signup", async (req, res) => {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.json({ success: true, user });
    });
    

    module.exports = router