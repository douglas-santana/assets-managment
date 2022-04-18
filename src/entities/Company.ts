import { Schema } from 'mongoose'
import mongoose from "mongoose";

const UnitModel = new Schema({
  name: String,
  employee: String,
  unit: String
});

export default mongoose.model('Company', UnitModel);