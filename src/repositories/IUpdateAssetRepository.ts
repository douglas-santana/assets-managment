import { IAssetDTO } from "../DTO/assetDTO";

export interface IUpdateAssetRepository {
  updateAsset(id: string, data: IAssetDTO): Promise<IAssetDTO[]>;
}