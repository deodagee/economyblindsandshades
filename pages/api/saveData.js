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
      nameHoneycombBlindsRoomLightening: data.nameHoneycombBlindsRoomLightening,
      productName1HoneycombBlindsRoomLightening: data.productName1HoneycombBlindsRoomLightening,
      productName2HoneycombBlindsRoomLightening: data.productName2HoneycombBlindsRoomLightening,
      WandPriceCMSHoneycombBlindsRoomLightening: data.WandPriceCMSHoneycombBlindsRoomLightening,
      roomnameHoneycombBlindsRoomLightening: data.roomnameHoneycombBlindsRoomLightening,
      cordlesspriceCMSHoneycombBlindsRoomLightening: data.cordlesspriceCMSHoneycombBlindsRoomLightening,
      motorizedpriceCMSHoneycombBlindsRoomLightening: data.motorizedpriceCMSHoneycombBlindsRoomLightening,
      inchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening: data.inchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening,
      inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening: data.inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening,
      inchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening: data.inchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening,
      inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening: data.inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening,
      totalpricecalculatedHoneycombBlindsRoomLightening: data.totalpricecalculatedHoneycombBlindsRoomLightening,



      nameHoneycombBlindsRoomDarkening: data.nameHoneycombBlindsRoomDarkening,
      productName1HoneycombBlindsRoomDarkening: data.productName1HoneycombBlindsRoomDarkening,
      productName2HoneycombBlindsRoomDarkening: data.productName2HoneycombBlindsRoomDarkening,
      WandPriceCMSHoneycombBlindsRoomDarkening: data.WandPriceCMSHoneycombBlindsRoomDarkening,
      roomnameHoneycombBlindsRoomDarkening: data.roomnameHoneycombBlindsRoomDarkening,
      cordlesspriceCMSHoneycombBlindsRoomDarkening: data.cordlesspriceCMSHoneycombBlindsRoomDarkening,
      motorizedpriceCMSHoneycombBlindsRoomDarkening: data.motorizedpriceCMSHoneycombBlindsRoomDarkening,
      inchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening: data.inchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening,
      inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening: data.inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening,
      inchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening: data.inchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening,
      inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening: data.inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening,
      totalpricecalculatedHoneycombBlindsRoomDarkening: data.totalpricecalculatedHoneycombBlindsRoomDarkening,
      

      nameRollerBlindsRoomLightening: data.nameRollerBlindsRoomLightening,
      productName1RollerBlindsRoomLightening: data.productName1RollerBlindsRoomLightening,
      productName2RollerBlindsRoomLightening: data.productName2RollerBlindsRoomLightening,
      WandPriceCMSRollerBlindsRoomLightening: data.WandPriceCMSRollerBlindsRoomLightening,
      roomnameRollerBlindsRoomLightening: data.roomnameRollerBlindsRoomLightening,
      cordlesspriceCMSRollerBlindsRoomLightening: data.cordlesspriceCMSRollerBlindsRoomLightening,
      motorizedpriceCMSRollerBlindsRoomLightening: data.motorizedpriceCMSRollerBlindsRoomLightening,
      inchPricesAfterWidthInsideMountRollerBlindsRoomLightening: data.inchPricesAfterWidthInsideMountRollerBlindsRoomLightening,
      inchPricesAfterHeightInsideMountRollerBlindsRoomLightening: data.inchPricesAfterHeightInsideMountRollerBlindsRoomLightening,
      inchPricesAfterWidthOutsideMountRollerBlindsRoomLightening: data.inchPricesAfterWidthOutsideMountRollerBlindsRoomLightening,
      inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening: data.inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening,
      totalpricecalculatedRollerBlindsRoomLightening: data.totalpricecalculatedRollerBlindsRoomLightening,


      
      nameRollerBlindsRoomDarkening: data.nameRollerBlindsRoomDarkening,
      productName1RollerBlindsRoomDarkening: data.productName1RollerBlindsRoomDarkening,
      productName2RollerBlindsRoomDarkening: data.productName2RollerBlindsRoomDarkening,
      WandPriceCMSRollerBlindsRoomDarkening: data.WandPriceCMSRollerBlindsRoomDarkening,
      roomnameRollerBlindsRoomDarkening: data.roomnameRollerBlindsRoomDarkening,
      cordlesspriceCMSRollerBlindsRoomDarkening: data.cordlesspriceCMSRollerBlindsRoomDarkening,
      motorizedpriceCMSRollerBlindsRoomDarkening: data.motorizedpriceCMSRollerBlindsRoomDarkening,
      inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening: data.inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening,
      inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening: data.inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening,
      inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening: data.inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening,
      inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening: data.inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening,
      totalpricecalculatedRollerBlindsRoomDarkening: data.totalpricecalculatedRollerBlindsRoomDarkening,

      
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
