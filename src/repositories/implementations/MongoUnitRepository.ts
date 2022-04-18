import { IUnitRepository } from "../IUnitRepository";
import { IUserDTO } from "../../DTO/userDTO";
import Unit from "../../entities/Unit";
import User from "../../entities/User";
import { IUnitDTO } from "../../DTO/unitDTO";

export class MongoUnitRepository implements IUnitRepository {
  async findByEmail(email: IUnitDTO): Promise<IUserDTO> {
    const existsEmail = await User.findOne({ email });
    const { name } = existsEmail
    return Unit.create({ unitName: name });
  }
}