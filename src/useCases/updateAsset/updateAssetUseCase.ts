import { IAssetDTO } from "../../DTO/assetDTO";
import { IUpdateAssetRepository } from "../../repositories/IUpdateAssetRepository";

export class UpdateAssetUseCase {
  constructor(
    private updateAssetRepository: IUpdateAssetRepository
  ){}

  async execute(id: string, data: IAssetDTO) {
    const assets = await this.updateAssetRepository.updateAsset(id, data);
    return assets;
  }
}