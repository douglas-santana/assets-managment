import { IAssetDTO } from "../DTO/assetDTO";

export interface IGetAssetByUserIdRepository {
  findAssetByUserId(id: string): Promise<IAssetDTO[]>;
}