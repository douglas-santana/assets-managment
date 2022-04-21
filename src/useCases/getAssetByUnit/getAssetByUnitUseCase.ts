import { IGetAssetByUnitRepository } from "../../repositories/IGetAssetByUnitRepository";

export class GetAssetByUnitUseCase {
  constructor(
    private getAssetByUnitRepository: IGetAssetByUnitRepository
  ){}

  async execute(id: string) {
    const assets = await this.getAssetByUnitRepository.findAssets(id);
    return assets;
  }
}