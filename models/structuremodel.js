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

});

const Test = models.Test || model("Test", testSchema);

export default Test;
