import { IAssetDTO } from "../DTO/assetDTO";

export interface IAssetRepository {
  findByEmail(asset: IAssetDTO): Promise<IAssetDTO>
}