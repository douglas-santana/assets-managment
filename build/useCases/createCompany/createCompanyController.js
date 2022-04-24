"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyController = void 0;
class CreateCompanyController {
    constructor(createCompanyUseCase) {
        this.createCompanyUseCase = createCompanyUseCase;
    }
    async handle(req, res) {
        const { name, userName, userId, unitId } = req.body;
        try {
            await this.createCompanyUseCase.execute({ name, userName, userId, unitId });
            return res.status(201).json({ message: 'Company registred!' });
        }
        catch (error) {
            return res.status(400).json({ messsage: error.message || 'Internal Error.' });
        }
    }
}
exports.CreateCompanyController = CreateCompanyController;
