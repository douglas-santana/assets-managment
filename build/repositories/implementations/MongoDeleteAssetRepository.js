"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDeleteAssetRepository = void 0;
const Asset_1 = __importDefault(require("../../entities/Asset"));
class MongoDeleteAssetRepository {
    async deleteAsset(id) {
        await Asset_1.default.findOneAndRemove({ id });
    }
}
exports.MongoDeleteAssetRepository = MongoDeleteAssetRepository;
