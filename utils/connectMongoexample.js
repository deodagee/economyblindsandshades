// C:\Users\User\economyblindsandshadesjs\utils\connectMongo.js

import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      connectTimeoutMS: 30000, // 30 seconds
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Throw the error to be caught in your API route.
  }
};

export default connectMongo;