"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAssetUseCase = void 0;
class UpdateAssetUseCase {
    constructor(updateAssetRepository) {
        this.updateAssetRepository = updateAssetRepository;
    }
    async execute(id, data) {
        await this.updateAssetRepository.updateAsset(id, data);
    }
}
exports.UpdateAssetUseCase = UpdateAssetUseCase;
