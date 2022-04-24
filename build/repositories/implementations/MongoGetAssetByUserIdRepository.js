"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoGetAssetByUserIdRepository = void 0;
const Asset_1 = __importDefault(require("../../entities/Asset"));
class MongoGetAssetByUserIdRepository {
    async findAssetByUserId(id) {
        const assetByUserId = await Asset_1.default.find({ owner: id });
        return assetByUserId;
    }
}
exports.MongoGetAssetByUserIdRepository = MongoGetAssetByUserIdRepository;
