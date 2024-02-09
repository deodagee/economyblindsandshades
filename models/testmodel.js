// C:\Users\User\economyblindsandshadesjs\models\testmodel.js

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
  }
});

const Test = models.Test || model("Test", testSchema);

export default Test;
