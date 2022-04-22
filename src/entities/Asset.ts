import { Schema } from 'mongoose'
import mongoose from "mongoose";

const AssetModel = new Schema({
  image: String,
  name: String,
  description: String,
  model: String,
  owner: String,
  status: String,
  health: String
});

export default mongoose.model('Asset', AssetModel);