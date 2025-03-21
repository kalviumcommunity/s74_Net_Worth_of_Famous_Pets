import mongoose from "mongoose"
const petSchena = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        first_name:{
            type: String,
            required:true,
            
        },
        pet_owner_name:{
            type : String,
            required:true,
            
        },
        owner_email:{
            type:String,
            required:true,
            unique:true
        },
        pet_gender:{
            type:String,
            required:true,
            unique:true
        } ,
        owner_phone:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)