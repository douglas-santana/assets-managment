import { IUnitDTO } from "../DTO/unitDTO";
import { IUserDTO } from "../DTO/userDTO";


export interface IUnitRepository {
  findByEmail(email: IUnitDTO): Promise<IUserDTO>;
}