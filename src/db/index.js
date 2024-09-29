import mongoose from "mongoose";
import { DB_NAME } from "../constant.js`";

const connectDB = async ()=>{
    try {
const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected successfully to ${ConnectionInstance.connection.host}:${ConnectionInstance.connection.port}/${DB_NAME}`);


    } catch (error) {
        console.log('this is error', error);
        process.exit(1);        
    }
}

export default connectDB;