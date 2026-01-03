import mongoose from "mongoose" 
import config from "./index.js";


const connectDB = async() => {
    try{
        const connection = await mongoose.connect(config.db.uri, {dbName: config.db.name });
        console.log(`MongoDB connected: ${connection.connection.host}/${connection.connection.name}`);
    }catch(error){
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

export default connectDB; 