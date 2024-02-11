// C:\Users\User\economyblindsandshadesjs\utils\connectMongo.js

import { MongoClient } from "mongodb";

const connectMongo = async () => {
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Throw the error to be caught in your API route.
  } finally {
    await client.close();
  }
};

export default connectMongo;
