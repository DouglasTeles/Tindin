import express from 'express';
const app = express();
require('dotenv').config()

const mongoose = require('mongoose');

app.use(express.json())



//database connection
const mongoConnection = process.env.MONGO_URI
mongoose.connect(mongoConnection, {
    useUnifiedTopology: true,
    useUrlParsers: true    
}, () =>{
    console.log('Connected database')
})


const PORT = 3000;
app.listen(PORT, () =>{
    console.log("App running in port " + PORT);
});