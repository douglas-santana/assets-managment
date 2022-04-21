import { IAssetDTO } from "../DTO/assetDTO";

export interface IGetAssetByUnitRepository {
  findAssets(id: string): Promise<IAssetDTO[]>;
}