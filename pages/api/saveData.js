// C:\Users\User\economyblindsandshadesjs\pages\api\saveData.js

import connectMongo from "../../utils/connectMongo";
import Test from "../../models/structuremodel";

export default async function saveData(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { data } = req.body;

  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const savedData = await Test.create({
      name: data.name,
      productName1: data.productName1,
      productName2: data.productName2,
      WandPriceCMS: data.WandPriceCMS,
      roomname: data.roomname,
      cordlesspriceCMS: data.cordlesspriceCMS,
      motorizedpriceCMS: data.motorizedpriceCMS,
      totalpricecalculated: data.totalpricecalculated,
      inchPricesAfterWidthInsideMount: data.inchPricesAfterWidthInsideMount,
      inchPricesAfterHeightInsideMount: data.inchPricesAfterHeightInsideMount,
      inchPricesAfterWidthOutsideMount: data.inchPricesAfterWidthOutsideMount,
      inchPricesAfterHeightOutsideMount: data.inchPricesAfterHeightOutsideMount,
    });

    console.log("CREATED DOCUMENT");

    res.status(200).json({ message: 'Data saved successfully', data: savedData });
  } catch (error) {
    console.error("Error in saveData:", error);

    // Check if the error is a duplicate key error
    if (error.code === 11000 || error.code === 11001) {
      res.status(400).json({ error: "Duplicate key error: The 'name' value already exists." });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
