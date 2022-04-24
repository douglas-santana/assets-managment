"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepositoryInMemory = void 0;
const uuid_1 = require("uuid");
class UsersRepositoryInMemory {
    constructor() {
        this.users = [];
    }
    async findByEmail(email) {
        const user = this.users.find((user) => user.email === email);
        return user;
    }
    async save(user) {
        Object.assign(user, {
            id: (0, uuid_1.v4)(),
        });
        this.users.push(user);
        return user;
    }
}
exports.UsersRepositoryInMemory = UsersRepositoryInMemory;
