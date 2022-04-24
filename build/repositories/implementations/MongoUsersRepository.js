"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUsersRepository = void 0;
const User_1 = __importDefault(require("../../entities/User"));
class MongoUsersRepository {
    async findByEmail(email) {
        const existsEmail = await User_1.default.findOne({ email });
        return existsEmail;
    }
    async save(user) {
        const createdUser = await User_1.default.create(user);
        return createdUser;
    }
}
exports.MongoUsersRepository = MongoUsersRepository;
