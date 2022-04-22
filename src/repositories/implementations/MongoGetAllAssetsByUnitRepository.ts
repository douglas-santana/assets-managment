import { IGetAllAssetsByUnitRepository } from "../IGetAllAssetsByUnitRepository";
import { IAssetDTO } from "../../DTO/assetDTO";
import Unit from "../../entities/Unit";

export class MongoGetAllAssetsByUnitRepository implements IGetAllAssetsByUnitRepository {
  async findAssets(): Promise<IAssetDTO[]> {
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
}
