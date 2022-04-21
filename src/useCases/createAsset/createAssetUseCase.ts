import { IAssetDTO } from "../../DTO/assetDTO";
import { IAssetRepository } from "../../repositories/IAssetRepository";

export class CreateAssetUseCase {
  constructor(
    private assetRepository: IAssetRepository
  ){}

  async execute(asset: IAssetDTO) {
    await this.assetRepository.save(asset);
  }
}