import { IAssetDTO } from "../../DTO/assetDTO";
import { IUpdateAssetRepository } from "../../repositories/IUpdateAssetRepository";

export class UpdateAssetUseCase {
  constructor(
    private updateAssetRepository: IUpdateAssetRepository
  ){}

  async execute(id: string, data: IAssetDTO) {
    await this.updateAssetRepository.updateAsset(id, data);
  }
}