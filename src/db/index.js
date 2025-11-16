import dotenv from 'dotenv';

import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectDB = async () => {
    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected..!! `);
        // DB_HOST: ${connectionInstance.connection.host}
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR: ",error);
        process.exit(1);
    }
}

export default connectDB;