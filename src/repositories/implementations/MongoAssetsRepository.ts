import { IAssetRepository } from "../IAssetRepository";
import Asset from "../../entities/Asset";
import User from "../../entities/User";
import { IAssetDTO } from "../../DTO/assetDTO";


export class MongoAssetsRepository implements IAssetRepository {
  async findByEmail(asset: IAssetDTO): Promise<IAssetDTO> {
    const { email } = asset;
    const existsEmail = await User.findOne({ email });
    const { name } = existsEmail;

    const assets = await Asset.create({ ...asset, owner: name });
    return assets;
  }
}