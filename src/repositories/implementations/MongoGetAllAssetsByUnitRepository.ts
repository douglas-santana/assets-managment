import { IGetAssetsByUnitRepository } from "../IGetAllAssetsByUnitRepository";
import { IAssetDTO } from "../../DTO/assetDTO";
import Unit from "../../entities/Unit";

export class MongoGetAssetsByUnitRepository implements IGetAssetsByUnitRepository {
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
