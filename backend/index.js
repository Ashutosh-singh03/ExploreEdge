const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const userRoute=require("./routes/userRoute.js");
const hotelRoute=require("./routes/hotelRoute.js");
const roomRoute=require("./routes/roomRoute.js");
const authRoute=require("./routes/authRoute.js");
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

app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/hotel",hotelRoute);
app.use("/api/room",roomRoute);

app.listen(8800,()=>{
    connect();
    console.log("Backend is connected");
})