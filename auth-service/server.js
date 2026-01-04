import dotenv from "dotenv"
dotenv.config()


import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import config from "./src/config/index.js";


const startServer = async() => {
    try{
        await connectDB();
        app.listen(config.app.port, () => {
            console.log(`Auth Server Runnning At Port: ${config.app.port}`);
        })
    }catch(error){
         console.error("Failed to start Auth Service", error);
         process.exit(1)
    }
} 

startServer()