export interface IAssetDTO {
  id?: string,
  email?: string,
  unitId: string,
  image: string,
  name: string,
  description: string,
  model: string,
  owner?: string,
  status: string,
  health: string
}