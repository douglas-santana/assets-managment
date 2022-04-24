"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoConnection = mongoose_1.default.connect('mongodb+srv://testeTS:testets123@cluster0.5lucr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then((data) => {
    console.log('MongoDB Connection Succeeded', data.version);
})
    .catch((err) => {
    console.log('Error in DB connection:', err.message);
});
exports.mongoConnection = mongoConnection;
