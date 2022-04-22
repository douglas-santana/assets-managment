import { IGetAllAssetsByUnitRepository } from "../../repositories/IGetAllAssetsByUnitRepository";

export class GetAllAssetsByUnitUseCase {
  constructor(
    private getAllAssetsByUnitRepository: IGetAllAssetsByUnitRepository
  ){}

  async execute() {
    const assets = await this.getAllAssetsByUnitRepository.findAssets();
    return assets;
  }
}