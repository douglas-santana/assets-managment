import { IDeleteAssetRepository } from "../../repositories/IDeleteAssetRepository";

export class DeleteAssetUseCase {
  constructor(
    private deleteAssetRepository: IDeleteAssetRepository
  ){}

  async execute(id: string) {
    const assets = await this.deleteAssetRepository.deleteAsset(id);
    return assets;
  }
}