"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAssetsByUnitUseCase = void 0;
class GetAllAssetsByUnitUseCase {
    constructor(getAllAssetsByUnitRepository) {
        this.getAllAssetsByUnitRepository = getAllAssetsByUnitRepository;
    }
    async execute() {
        const assets = await this.getAllAssetsByUnitRepository.findAssets();
        return assets;
    }
}
exports.GetAllAssetsByUnitUseCase = GetAllAssetsByUnitUseCase;
