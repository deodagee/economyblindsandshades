// C:\Users\User\economyblindsandshadesjs\pages\api\test\add.js

import connectMongo from "../../utils/connectMongo";
import Test from "../../models/structuremodel";

export default async function addTest(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    // Retrieve the posted data from req.body
    const postData = req.body;

    console.log("POSTED DATA:", postData);

    console.log("CREATING DOCUMENT");
    const test = await Test.create(postData);
    console.log("CREATED DOCUMENT");

    // Pass the posted data as a prop to the component
    res.json({ message: "Test document created successfully", data: test, postData });
  } catch (error) {
    console.error("Error in addTest:", error);

    // Check if the error is a duplicate key error
    if (error.code === 11000 || error.code === 11001) {
      res.status(400).json({ error: "Duplicate key error: The 'name' value already exists." });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
