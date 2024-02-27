// C:\Users\User\economyblindsandshadesjs\pages\api\getLatestData.js

import connectMongo from "../../utils/connectMongo";
import Test from "../../models/testmodel";

export default async function getLatestData(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    // Fetch the latest data from the database
    const datafetchbytime = await Test.findOne({}).sort({ name: -1 }).limit(1);

    res.json({ data: datafetchbytime });
  } catch (error) {
    console.error("Error in getLatestData:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
