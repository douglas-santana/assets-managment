"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoAssetsRepository = void 0;
const Asset_1 = __importDefault(require("../../entities/Asset"));
class MongoAssetsRepository {
    async save(asset) {
        await Asset_1.default.create(asset);
    }
}
exports.MongoAssetsRepository = MongoAssetsRepository;
