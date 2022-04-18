import { Schema } from 'mongoose'
import mongoose from "mongoose";

const UnitModel = new Schema({
  unitName: String
});

export default mongoose.model('Unit', UnitModel);