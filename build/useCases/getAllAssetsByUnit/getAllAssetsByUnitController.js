"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAssetsByUnitController = void 0;
class GetAllAssetsByUnitController {
    constructor(getAllAssetsByUnitUseCase) {
        this.getAllAssetsByUnitUseCase = getAllAssetsByUnitUseCase;
    }
    async handle(req, res) {
        try {
            const assets = await this.getAllAssetsByUnitUseCase.execute();
            return res.status(200).json(assets);
        }
        catch (error) {
            return res.status(400).json({ messsage: error.message || 'Internal Error.' });
        }
    }
}
exports.GetAllAssetsByUnitController = GetAllAssetsByUnitController;
