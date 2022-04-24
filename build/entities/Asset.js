"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const AssetModel = new mongoose_1.Schema({
    image: String,
    name: String,
    description: String,
    model: String,
    owner: String,
    status: String,
    health: String
});
exports.default = mongoose_2.default.model('Asset', AssetModel);
