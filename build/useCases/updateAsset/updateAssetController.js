"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAssetController = void 0;
class UpdateAssetController {
    constructor(updateAssetUseCase) {
        this.updateAssetUseCase = updateAssetUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        const { image, name, description, model, owner, status, health } = req.body;
        const data = { image, name, description, model, owner, status, health };
        try {
            await this.updateAssetUseCase.execute(id, data);
            return res.status(200).json({ message: 'Asset updated!' });
        }
        catch (error) {
            return res.status(400).json({ messsage: error.message || 'Internal Error.' });
        }
    }
}
exports.UpdateAssetController = UpdateAssetController;
