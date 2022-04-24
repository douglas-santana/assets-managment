"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAssetController = void 0;
class DeleteAssetController {
    constructor(deleteAssetUseCase) {
        this.deleteAssetUseCase = deleteAssetUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            await this.deleteAssetUseCase.execute(id);
            return res.status(200).json({ message: 'Asset deleted' });
        }
        catch (error) {
            return res.status(400).json({ messsage: error.message || 'Internal Error.' });
        }
    }
}
exports.DeleteAssetController = DeleteAssetController;
