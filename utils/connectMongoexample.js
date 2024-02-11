// C:\Users\User\economyblindsandshadesjs\utils\connectMongo.js

import mongoose from "mongoose";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.process.env.MONGO_URI,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      connectTimeoutMS: 30000, // 30 seconds
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Throw the error to be caught in your API route.
  }
}
run().catch(console.dir);
