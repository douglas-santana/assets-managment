"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssetUseCase = void 0;
class CreateAssetUseCase {
    constructor(assetRepository) {
        this.assetRepository = assetRepository;
    }
    async execute(asset) {
        await this.assetRepository.save(asset);
    }
}
exports.CreateAssetUseCase = CreateAssetUseCase;
