"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUpdateAssetRepository = void 0;
const Asset_1 = __importDefault(require("../../entities/Asset"));
class MongoUpdateAssetRepository {
    async updateAsset(id, data) {
        await Asset_1.default.findByIdAndUpdate(id, data);
    }
}
exports.MongoUpdateAssetRepository = MongoUpdateAssetRepository;
