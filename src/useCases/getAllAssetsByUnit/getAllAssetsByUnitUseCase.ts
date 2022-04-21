import { IGetAssetsByUnitRepository } from "../../repositories/IGetAllAssetsByUnitRepository";

export class GetAssetsByUnitUseCase {
  constructor(
    private getAssetsByUnitRepository: IGetAssetsByUnitRepository
  ){}

  async execute() {
    const assets = await this.getAssetsByUnitRepository.findAssets();
    return assets;
  }
}