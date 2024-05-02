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
      nameZebrablindsRoomLightening: data.nameZebrablindsRoomLightening,
      productName1ZebrablindsRoomLightening: data.productName1ZebrablindsRoomLightening,
      productName2ZebrablindsRoomLightening: data.productName2ZebrablindsRoomLightening,
      WandPriceCMSZebrablindsRoomLightening: data.WandPriceCMSZebrablindsRoomLightening,
      roomnameZebrablindsRoomLightening: data.roomnameZebrablindsRoomLightening,
      cordlesspriceCMSZebrablindsRoomLightening: data.cordlesspriceCMSZebrablindsRoomLightening,
      motorizedpriceCMSZebrablindsRoomLightening: data.motorizedpriceCMSZebrablindsRoomLightening,
      inchPricesAfterWidthInsideMountZebrablindsRoomLightening: data.inchPricesAfterWidthInsideMountZebrablindsRoomLightening,
      inchPricesAfterHeightInsideMountZebrablindsRoomLightening: data.inchPricesAfterHeightInsideMountZebrablindsRoomLightening,
      inchPricesAfterWidthOutsideMountZebrablindsRoomLightening: data.inchPricesAfterWidthOutsideMountZebrablindsRoomLightening,
      inchPricesAfterHeightOutsideMountZebrablindsRoomLightening: data.inchPricesAfterHeightOutsideMountZebrablindsRoomLightening,
      totalpricecalculatedZebrablindsRoomLightening: data.totalpricecalculatedZebrablindsRoomLightening,


      nameZebrablindsRoomDarkening: data.nameZebrablindsRoomDarkening,
      productName1ZebrablindsRoomDarkening: data.productName1ZebrablindsRoomDarkening,
      productName2ZebrablindsRoomDarkening: data.productName2ZebrablindsRoomDarkening,
      WandPriceCMSZebrablindsRoomDarkening: data.WandPriceCMSZebrablindsRoomDarkening,
      roomnameZebrablindsRoomDarkening: data.roomnameZebrablindsRoomDarkening,
      cordlesspriceCMSZebrablindsRoomDarkening: data.cordlesspriceCMSZebrablindsRoomDarkening,
      motorizedpriceCMSZebrablindsRoomDarkening: data.motorizedpriceCMSZebrablindsRoomDarkening,
      inchPricesAfterWidthInsideMountZebrablindsRoomDarkening: data.inchPricesAfterWidthInsideMountZebrablindsRoomDarkening,
      inchPricesAfterHeightInsideMountZebrablindsRoomDarkening: data.inchPricesAfterHeightInsideMountZebrablindsRoomDarkening,
      inchPricesAfterWidthOutsideMountZebrablindsRoomDarkening: data.inchPricesAfterWidthOutsideMountZebrablindsRoomDarkening,
      inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening: data.inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening,
      totalpricecalculatedZebrablindsRoomDarkening: data.totalpricecalculatedZebrablindsRoomDarkening,


      nameShangrilablindsRoomDarkening: data.nameShangrilablindsRoomDarkening,
      productName1ShangrilablindsRoomDarkening: data.productName1ShangrilablindsRoomDarkening,
      productName2ShangrilablindsRoomDarkening: data.productName2ShangrilablindsRoomDarkening,
      WandPriceCMSShangrilablindsRoomDarkening: data.WandPriceCMSShangrilablindsRoomDarkening,
      roomnameShangrilablindsRoomDarkening: data.roomnameShangrilablindsRoomDarkening,
      cordlesspriceCMSShangrilablindsRoomDarkening: data.cordlesspriceCMSShangrilablindsRoomDarkening,
      motorizedpriceCMSShangrilablindsRoomDarkening: data.motorizedpriceCMSShangrilablindsRoomDarkening,
      inchPricesAfterWidthInsideMountShangrilablindsRoomDarkening: data.inchPricesAfterWidthInsideMountShangrilablindsRoomDarkening,
      inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening: data.inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening,
      inchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening: data.inchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening,
      inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening: data.inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening,
      totalpricecalculatedShangrilablindsRoomDarkening: data.totalpricecalculatedShangrilablindsRoomDarkening,


      nameShangrilablindsRoomLightening: data.nameShangrilablindsRoomLightening,
      productName1ShangrilablindsRoomLightening: data.productName1ShangrilablindsRoomLightening,
      productName2ShangrilablindsRoomLightening: data.productName2ShangrilablindsRoomLightening,
      WandPriceCMSShangrilablindsRoomLightening: data.WandPriceCMSShangrilablindsRoomLightening,
      roomnameShangrilablindsRoomLightening: data.roomnameShangrilablindsRoomLightening,
      cordlesspriceCMSShangrilablindsRoomLightening: data.cordlesspriceCMSShangrilablindsRoomLightening,
      motorizedpriceCMSShangrilablindsRoomLightening: data.motorizedpriceCMSShangrilablindsRoomLightening,
      inchPricesAfterWidthInsideMountShangrilablindsRoomLightening: data.inchPricesAfterWidthInsideMountShangrilablindsRoomLightening,
      inchPricesAfterHeightInsideMountShangrilablindsRoomLightening: data.inchPricesAfterHeightInsideMountShangrilablindsRoomLightening,
      inchPricesAfterWidthOutsideMountShangrilablindsRoomLightening: data.inchPricesAfterWidthOutsideMountShangrilablindsRoomLightening,
      inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening: data.inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening,
      totalpricecalculatedShangrilablindsRoomDarkening: data.totalpricecalculatedShangrilablindsRoomDarkening,

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
