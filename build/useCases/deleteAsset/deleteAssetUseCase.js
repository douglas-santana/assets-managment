"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAssetUseCase = void 0;
class DeleteAssetUseCase {
    constructor(deleteAssetRepository) {
        this.deleteAssetRepository = deleteAssetRepository;
    }
    async execute(id) {
        const assets = await this.deleteAssetRepository.deleteAsset(id);
        return assets;
    }
}
exports.DeleteAssetUseCase = DeleteAssetUseCase;
