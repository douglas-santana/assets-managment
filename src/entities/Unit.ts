import { Schema } from 'mongoose'
import mongoose from "mongoose";

const UnitModel = new Schema({
  userName: String,
  userId: String
});

export default mongoose.model('Unit', UnitModel);