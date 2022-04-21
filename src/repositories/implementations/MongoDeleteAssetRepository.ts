import { IDeleteAssetRepository } from "../IDeleteAssetRepository";
import Asset from "../../entities/Asset";

export class MongoDeleteAssetRepository implements IDeleteAssetRepository {
  async deleteAsset(id: string): Promise<void> {
    await Asset.findOneAndRemove({ id })
  }
}
