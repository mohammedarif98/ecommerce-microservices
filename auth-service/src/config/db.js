import mongoose from "mongoose" 

const connectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            dbname: process.env.DB_NAME
        });
        console.log(`MongoDB connected: ${connect.connection.host}/${connect.connection.name}`);
    }catch(error){
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

export default connectDB;