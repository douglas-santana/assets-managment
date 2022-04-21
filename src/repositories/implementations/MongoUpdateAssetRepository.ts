import { IUpdateAssetRepository } from "../IUpdateAssetRepository";
import { IAssetDTO } from "../../DTO/assetDTO";
import Asset from "../../entities/Asset";

export class MongoUpdateAssetRepository implements IUpdateAssetRepository {
  async updateAsset(id: string, data: IAssetDTO): Promise<IAssetDTO> {
    const assetUpdated = await Asset.findByIdAndUpdate(
      id, { $set: data },
    )
    return assetUpdated;
  }
}
