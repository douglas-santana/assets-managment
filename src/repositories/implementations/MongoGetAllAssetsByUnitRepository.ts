import { IGetAssetsByUnitRepository } from "../IGetAllAssetsByUnitRepository";
import { IAssetDTO } from "../../DTO/assetDTO";
import Unit from "../../entities/Unit";
import Asset from "../../entities/Asset";

export class MongoGetAssetsByUnitRepository implements IGetAssetsByUnitRepository {
  async findAssets(id: string): Promise<IAssetDTO[]> {
    if (id === 'all') {
      const Allassets = await Unit.aggregate([
        {
          $lookup: {
            from: "assets",
            localField: "userId",
            foreignField: "owner",
            as: "assets"
          }
        }
      ]);
      return Allassets;
    }
    const assetByUnitUserId = Asset.find({ owner: id })
    return assetByUnitUserId
  }
}
