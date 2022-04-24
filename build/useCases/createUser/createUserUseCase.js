"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new Error('User Already Exists.');
        }
        const userCreated = await this.usersRepository.save(data);
        return userCreated;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
