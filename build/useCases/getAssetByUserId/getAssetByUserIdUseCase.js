"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAssetByUserIdUseCase = void 0;
class GetAssetByUserIdUseCase {
    constructor(getAssetByUserIdRepository) {
        this.getAssetByUserIdRepository = getAssetByUserIdRepository;
    }
    async execute(id) {
        const assets = await this.getAssetByUserIdRepository.findAssetByUserId(id);
        return assets;
    }
}
exports.GetAssetByUserIdUseCase = GetAssetByUserIdUseCase;
