import { IGetAssetByUserIdRepository } from "../../repositories/IGetAssetByUserIdRepository";

export class GetAssetByUserIdUseCase {
  constructor(
    private getAssetByUserIdRepository: IGetAssetByUserIdRepository
  ){}

  async execute(id: string) {
    const assets = await this.getAssetByUserIdRepository.findAssetByUserId(id);
    return assets;
  }
}