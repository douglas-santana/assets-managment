"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssetController = void 0;
class CreateAssetController {
    constructor(createAssetUseCase) {
        this.createAssetUseCase = createAssetUseCase;
    }
    async handle(req, res) {
        const { image, name, description, model, owner, status, health } = req.body;
        try {
            await this.createAssetUseCase.execute({ image, name, description, model, owner, status, health });
            return res.status(201).json({ message: 'Asset registered!' });
        }
        catch (error) {
            return res.status(400).json({ messsage: error.message || 'Internal Error.' });
        }
    }
}
exports.CreateAssetController = CreateAssetController;