export interface IDeleteAssetRepository {
  deleteAsset(id: string): Promise<void>;
}