"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(req, res) {
        const { name, email, password } = req.body;
        try {
            const userCreated = await this.createUserUseCase.execute({ name, email, password });
            return res.status(201).json(userCreated);
        }
        catch (error) {
            return res.status(400).json({ messsage: error.messsage || 'Internal Error.' });
        }
    }
}
exports.CreateUserController = CreateUserController;
