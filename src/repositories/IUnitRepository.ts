import { IUnitDTO } from "../DTO/unitDTO";

export interface IUnitRepository {
  save(data: IUnitDTO): Promise<void>;
}