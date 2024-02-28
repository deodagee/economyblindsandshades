// C:\Users\User\economyblindsandshadesjs\pages\api/saveData.js

import connectMongo from "../../utils/connectMongo";
import Test from "../../models/testmodel";

export default async function saveData(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { data } = req.body;

  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    // Save the data to the database using the Test model
    const newData = new Test({ name: data.name, /* add other fields if necessary */ });
    await newData.save();

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error("Error in saveData:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
