const mongoose = require("mongoose")

const myPetSchema = new mongoose.Schema({
    petname:{type:String},
    description:{type:String},
    petage:{type:Number},
    petimage:{type:String},
    created_by:{type: mongoose.Schema.Types.ObjectId, ref:"User", required : true}
})

const MyPetModel = mongoose.model("MyPets", myPetSchema)
module.exports = MyPetModel