"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUnitRepository = void 0;
const Unit_1 = __importDefault(require("../../entities/Unit"));
class MongoUnitRepository {
    async save(data) {
        await Unit_1.default.create(data);
    }
}
exports.MongoUnitRepository = MongoUnitRepository;
