import { IAssetDTO } from "../DTO/assetDTO";

export interface IAssetRepository {
  save(asset: IAssetDTO): Promise<void>
}