"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUnitController = void 0;
class CreateUnitController {
    constructor(createUnitUseCase) {
        this.createUnitUseCase = createUnitUseCase;
    }
    async handle(req, res) {
        const { userName, userId } = req.body;
        try {
            await this.createUnitUseCase.execute({ userName, userId });
            return res.status(201).json({ message: 'Unit registered!' });
        }
        catch (error) {
            return res.status(400).json({ messsage: error.message || 'Internal Error.' });
        }
    }
}
exports.CreateUnitController = CreateUnitController;
