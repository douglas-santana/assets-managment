import { IAssetDTO } from "../DTO/assetDTO";

export interface IGetAllAssetsByUnitRepository {
  findAssets(): Promise<IAssetDTO[]>;
}