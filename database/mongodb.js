import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    console.log('Error in DB_URI');
    
    throw new Error( 'MongoDb uri is not available');   
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`connected to database`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectToDatabase