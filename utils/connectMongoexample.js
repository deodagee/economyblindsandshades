// C:\Users\User\economyblindsandshadesjs\utils\connectMongo.js

import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const mongoUri = process.env.NODE_ENV === "production"
      ? process.env.MONGO_PROD_URI // Use the production URI
      : process.env.MONGO_URI; // Use the development URI

    await mongoose.connect(mongoUri, {
      connectTimeoutMS: 30000, // 30 seconds
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Throw the error to be caught in your API route.
  }
};

export default connectMongo;
