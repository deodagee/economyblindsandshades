// C:\Users\User\economyblindsandshadesjs\models\structuremodel.js

import { Schema, model, models } from "mongoose";

const testSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  productName1: {
    type: String,
    required: true,
  },
  productName2: {
    type: String,
    required: true,
  },
  WandPriceCMS: {
    type: String,
    required: true,
  },
  motorizedpriceCMS: {
    type: String,
    required: true,
  },
  cordlesspriceCMS: {
    type: String,
    required: true,
  },
  roomname: {
    type: String,
    required: true,
  },
  inchPricesAfterWidthInsideMount: {
    type: String,
    required: true,
  },
  inchPricesAfterHeightInsideMount: {
    type: String,
    required: true,
  },
  inchPricesAfterWidthOutsideMount: {
    type: String,
    required: true,
  },
  inchPricesAfterHeightOutsideMount: {
    type: String,
    required: true,
  }

});

const Test = models.Test || model("Test", testSchema);

export default Test;
