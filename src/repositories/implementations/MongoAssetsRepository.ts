import { IAssetRepository } from "../IAssetRepository";
import Asset from "../../entities/Asset";
import { IAssetDTO } from "../../DTO/assetDTO";


export class MongoAssetsRepository implements IAssetRepository {
  async save(asset: IAssetDTO): Promise<void> {
    await Asset.create({ asset });
  }
}