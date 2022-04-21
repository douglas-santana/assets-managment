import { IGetAssetsByUnitRepository } from "../../repositories/IGetAllAssetsByUnitRepository";

export class GetAssetsByUnitUseCase {
  constructor(
    private getAssetsByUnitRepository: IGetAssetsByUnitRepository
  ){}

  async execute(id: string) {
    const assets = await this.getAssetsByUnitRepository.findAssets(id);
    return assets;
  }
}