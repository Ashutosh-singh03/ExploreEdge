const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const app=express();

app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // No need for useNewUrlParser or useUnifiedTopology
        console.log("Mongodb connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
};
console.log(process.env.MONGO_URI)
app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(8800,()=>{
    connect();
    console.log("Backend is connected");
})