import { IGetAssetByUnitRepository } from "../IGetAssetByUnitRepository";
import { IAssetDTO } from "../../DTO/assetDTO";
import Asset from "../../entities/Asset";

export class MongoGetAssetByUnitRepository implements IGetAssetByUnitRepository {
  async findAssets(id: string): Promise<IAssetDTO[]> {
    const assetByUnitUserId = await Asset.find({ owner: id });
    return assetByUnitUserId;
  }
}
