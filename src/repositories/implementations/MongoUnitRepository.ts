import { IUnitRepository } from "../IUnitRepository";
import Unit from "../../entities/Unit";
import { IUnitDTO } from "../../DTO/unitDTO";

export class MongoUnitRepository implements IUnitRepository {
  async save(data: IUnitDTO): Promise<void> {
    await Unit.create(data);
  }
}