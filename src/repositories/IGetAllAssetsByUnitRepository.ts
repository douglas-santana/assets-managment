import { IAssetDTO } from "../DTO/assetDTO";

export interface IGetAssetsByUnitRepository {
  findAssets(): Promise<IAssetDTO[]>;
}