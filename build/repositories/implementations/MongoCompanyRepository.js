"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoCompanyRepository = void 0;
const Company_1 = __importDefault(require("../../entities/Company"));
class MongoCompanyRepository {
    async save(company) {
        await Company_1.default.create(company);
    }
}
exports.MongoCompanyRepository = MongoCompanyRepository;
