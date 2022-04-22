import { IGetAssetByUserIdRepository } from "../IGetAssetByUserIdRepository";
import { IAssetDTO } from "../../DTO/assetDTO";
import Asset from "../../entities/Asset";

export class MongoGetAssetByUserIdRepository implements IGetAssetByUserIdRepository {
  async findAssetByUserId(id: string): Promise<IAssetDTO[]> {
    const assetByUserId = await Asset.find({ owner: id });
    return assetByUserId;
  }
}
