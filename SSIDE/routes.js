require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");  // Import User Model
const Pet = require("./models/Pet");    // Import Pet Model

const router = express.Router();

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("✅ Database Connected Successfully!");
}).catch((error) => {
    console.error("❌ Database Connection Failed:", error);
});

// ✅ Route to check API
router.get("/", (req, res) => {
    console.log("API is working!");
    res.send("API is working!");
});

/* ----------------------- User (Pet Lover) Routes ----------------------- */

// ✅ Create a new pet lover (Signup)
router.post("/users", async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ message: "User (Pet Lover) created successfully!", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get all pet lovers
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Update pet lover details
router.put("/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Delete pet lover
router.delete("/users/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User (Pet Lover) deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/* ----------------------- Pet Routes ----------------------- */

// ✅ Add a new pet
router.post("/pets", async (req, res) => {
    try {
        const { name, breed, netWorth, owner, job } = req.body;
        const newPet = new Pet({ name, breed, netWorth, owner, job });
        await newPet.save();
        res.json({ message: "Pet added successfully!", pet: newPet });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get all pets
router.get("/pets", async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get a specific pet by ID
router.get("/pets/:id", async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) return res.status(404).json({ message: "Pet not found!" });
        res.json(pet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Update pet details
router.put("/pets/:id", async (req, res) => {
    try {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Delete a pet
router.delete("/pets/:id", async (req, res) => {
    try {
        await Pet.findByIdAndDelete(req.params.id);
        res.json({ message: "Pet deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
