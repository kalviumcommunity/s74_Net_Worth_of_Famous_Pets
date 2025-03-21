import express from "express"
import connectDB from './database/db.js'
import dotenv from "dotenv"
import MyPetModel from "./model/myPet.js"
import cors from 'cors'

const app = express()
app.use(express.json())
dotenv.config()

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

connectDB();

app.get('/', async (req,res)=>{
    try {
        const user = await MyPetModel.find({})
        res.json(user)
    } 
    catch (error) {
        res.json(error)
    }
})


app.post('/createmypet', async (req,res)=>{
    try {
        const { petname, description, petage, petimage } = req.body;
        if(!petname || !description || !petage || !petimage){
            return res.status(404).json({message : "All fields are required"})
        }
        const pet = await MyPetModel.create({ petname, description, petage, petimage });      
        res.json(pet)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.get("/getpet/:id/", async (req,res)=>{
    try {
        const {id} = req.params
        const user = await MyPetModel.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.put('/updatepet/:id/', async (req,res)=>{
    // const id = req.params.id 
    // MyPetModel.findByIdAndUpdate({_id:id})
    // .then(pets => res.json(pets))
    // .catch(err=>console.log(err))
    
    try {
        const {id} = req.params;
        const {petname, description, petage, petimage} = req.body;
        

        const UPDATEDPET = await MyPetModel.findByIdAndUpdate(
            id, {petname, description, petage, petimage},
            {new : true}
        );

        if(!UPDATEDPET) return res.status(400).json({message : "Pet not found"})
        
        res.status(200).json(UPDATEDPET)
    } catch (error) {
        console.error(error)
        res.status(500).json({error : "Internal Server Error"})
    }


})

app.delete('/deletePet/:id', async (req,res)=>{
    try {
        const {id} = req.params
        const deletedPet = await MyPetModel.findByIdAndDelete(id)
        res.status(200).json({message : "Pet deleted Successfully", deletedPet})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})




const port = process.env.PORT 

app.listen(port, (req,res)=> console.log(   `Your server is running in http://localhost:${port}`))