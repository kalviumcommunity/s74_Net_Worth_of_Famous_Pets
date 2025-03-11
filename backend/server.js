const express = require('express')
const cors = require('cors')
const petfinderRoutes = require('./routes/petfinder')

const app = express();

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/api/petfinder', petfinderRoutes)



app.listen(PORT, () => {
    console.log(`Your server is Running on Port ${PORT}`)
})