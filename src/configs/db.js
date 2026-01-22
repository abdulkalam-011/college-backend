import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js'


const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`) 
    console.log("database connected ", connect.connection.host);
  } catch (error) {
    console.error("Database connection error: ", error);
    process.exit(1);
  }
};

export { connectDB };