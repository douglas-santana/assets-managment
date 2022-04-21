import { Schema } from 'mongoose'
import mongoose from "mongoose";

const UserModel = new Schema({
  name: String,
  email: String,
  password: String
});

export default mongoose.model('User', UserModel);