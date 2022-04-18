import { IGetAssetsByUnitRepository } from "../IGetAssetsByUnitRepository";
import { IAssetDTO } from "../../DTO/assetDTO";
import Asset from "../../entities/Asset";


export class MongoGetAssetsByUnitRepository implements IGetAssetsByUnitRepository {
  async findAssets(id: string): Promise<IAssetDTO[]> {
    if (id === 'Roberta') {
      const assets = await Asset.find({owner: id});
      return assets;
    }
    if (id === 'Emerson') {
      const assets = await Asset.find({owner: id});
      return assets;
    }
    const assets = await Asset.find();
    return assets;
  }
}