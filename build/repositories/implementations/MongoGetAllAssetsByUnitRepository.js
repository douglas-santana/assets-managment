"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoGetAllAssetsByUnitRepository = void 0;
const Unit_1 = __importDefault(require("../../entities/Unit"));
class MongoGetAllAssetsByUnitRepository {
    async findAssets() {
        const Allassets = await Unit_1.default.aggregate([
            {
                $lookup: {
                    from: "assets",
                    localField: "userId",
                    foreignField: "owner",
                    as: "assets"
                }
            }
        ]);
        return Allassets;
    }
}
exports.MongoGetAllAssetsByUnitRepository = MongoGetAllAssetsByUnitRepository;
