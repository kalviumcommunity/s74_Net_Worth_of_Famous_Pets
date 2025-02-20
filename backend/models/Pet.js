const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    netWorth: { type: Number, required: true },
    owner: { type: String, required: true },
    job: { type: String, required: false }
});

const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;
