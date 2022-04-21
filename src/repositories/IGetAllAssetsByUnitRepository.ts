import { IAssetDTO } from "../DTO/assetDTO";

export interface IGetAssetsByUnitRepository {
  findAssets(id: string): Promise<IAssetDTO[]>;
}