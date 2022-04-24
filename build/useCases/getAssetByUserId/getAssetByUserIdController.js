"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAssetByUserIdController = void 0;
class GetAssetByUserIdController {
    constructor(getAssetByUserIdUseCase) {
        this.getAssetByUserIdUseCase = getAssetByUserIdUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const assets = await this.getAssetByUserIdUseCase.execute(id);
            return res.status(200).json(assets);
        }
        catch (error) {
            return res.status(400).json({ messsage: error.message || 'Internal Error.' });
        }
    }
}
exports.GetAssetByUserIdController = GetAssetByUserIdController;
