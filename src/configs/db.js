import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URI) 
    console.log("database connected ", connect.connection.host);
  } catch (error) {
    console.error("Database connection error: ", error);
    process.exit(1);
  }
};

export { connectDB };