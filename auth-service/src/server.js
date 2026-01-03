import dotenv from "dotenv"
dotenv.config()

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.port || 4001


const startServer = async() => {
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Auth server runnning at port: ${PORT}`);
        })
    }catch(error){
         console.error("Failed to start Auth Service", error);
         process.exit(1)
    }
} 

startServer()