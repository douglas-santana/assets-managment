import { Schema } from 'mongoose'
import mongoose from "mongoose";

const UnitModel = new Schema({
  name: String,
  userName: String,
  userId: String,
  unitId: String
});

export default mongoose.model('Company', UnitModel);